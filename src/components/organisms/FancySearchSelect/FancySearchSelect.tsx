'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { css } from 'styled-components';

import { FancyBox } from '@/components/atoms/FancyBox';
import { FancyTextInput } from '@/components/organisms/FancyTextInput';
import { FancyItemContent } from '@/components/molecules/FancyItemContent';
import { TFancySearchSelectWithHTMLProps, TSearchSelectItem } from './FancySearchSelect.model';
import { SearchSelectWrapper, ItemsList, SearchItem, NoItemsText } from './FancySearchSelect.style';

/**
 * FancySearchSelect component with search, select functionality and height animation
 * @param props - Component props including items, onSelect, and search functionality
 */
export default function FancySearchSelect(props: TFancySearchSelectWithHTMLProps) {
  const {
    items = [],
    onSelect,
    filterFunction,
    noItemsText = 'No items found',
    maxHeight = '200px',
    openOnFocus = false,

    clearOnSelect = false,
    itemLayoutMode = 'span',
    value: controlledValue,
    onChange,
    onFocus,
    onBlur,
    themeType = 'primary',
    layer = 2,
    ...inputProps
  } = props;

  const [searchValue, setSearchValue] = useState(String(controlledValue || ''));
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(true);

  const contentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Default filter function
  const defaultFilterFunction = useCallback((items: TSearchSelectItem[], searchValue: string) => {
    const lowerSearchValue = searchValue.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerSearchValue) ||
        (item.description && item.description.toLowerCase().includes(lowerSearchValue))
    );
  }, []);

  // Filter items based on search value
  const filteredItems = useMemo(() => {
    const searchStr = String(searchValue);
    if (!searchStr.trim() && !openOnFocus) return [];
    if (!searchStr.trim() && openOnFocus) return items;

    const filterFunc = filterFunction || defaultFilterFunction;
    return filterFunc(items, searchStr);
  }, [items, searchValue, filterFunction, defaultFilterFunction, openOnFocus]);

  // Show dropdown when items are available and input is focused
  const shouldShowDropdown =
    isFocused && (filteredItems.length > 0 || (openOnFocus && String(searchValue).trim() === ''));

  // Calculate total height for FancyBox animation
  const [totalHeight, setTotalHeight] = useState('auto');

  // Animate FancyBox height
  useEffect(() => {
    if (!isFocused) {
      setTotalHeight('auto');
      return;
    }

    // Small delay to ensure content is rendered
    const timer = setTimeout(() => {
      if (contentRef.current) {
        const contentHeight = Math.min(contentRef.current.scrollHeight, 250);
        // Get the actual input wrapper height including padding
        const inputWrapperHeight = inputRef.current?.parentElement?.offsetHeight || 70;
        setTotalHeight(`${inputWrapperHeight + contentHeight}px`);
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [isFocused, filteredItems, searchValue]);

  // Update isOpen state based on shouldShowDropdown
  useEffect(() => {
    setIsOpen(shouldShowDropdown);
  }, [shouldShowDropdown]);

  // Handle search input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    setHoveredIndex(-1);
    if (onChange) onChange(e);
  };

  // Handle input focus
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  // Handle input blur with delay to allow item selection
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setIsFocused(false);
      setHoveredIndex(-1);
      if (onBlur) onBlur(e);
    }, 150);
  };

  // Handle item selection
  const handleItemSelect = (item: TSearchSelectItem) => {
    if (clearOnSelect) {
      setSearchValue('');
    } else {
      setSearchValue(item.title);
    }

    setIsFocused(false);
    setHoveredIndex(-1);

    if (onSelect) onSelect(item);

    // Don't refocus input after selection to keep dropdown closed
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || filteredItems.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHoveredIndex((prev) => {
          const newIndex = prev < filteredItems.length - 1 ? prev + 1 : 0;
          scrollToItem(newIndex);
          return newIndex;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHoveredIndex((prev) => {
          const newIndex = prev > 0 ? prev - 1 : filteredItems.length - 1;
          scrollToItem(newIndex);
          return newIndex;
        });
        break;
      case 'Enter':
        e.preventDefault();
        if (hoveredIndex >= 0 && hoveredIndex < filteredItems.length) {
          handleItemSelect(filteredItems[hoveredIndex]);
        }
        break;
      case 'Escape':
        setIsFocused(false);
        setHoveredIndex(-1);
        if (inputRef.current) {
          inputRef.current.blur();
        }
        break;
    }
  };

  // Scroll highlighted item into view
  const scrollToItem = (index: number) => {
    if (!listRef.current) return;

    const items = listRef.current.children;
    const targetItem = items[index] as HTMLElement;

    if (targetItem) {
      targetItem.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  // Sync with controlled value
  useEffect(() => {
    if (controlledValue !== undefined) {
      setSearchValue(String(controlledValue));
    }
  }, [controlledValue]);

  return (
    <SearchSelectWrapper>
      <FancyBox
        wide={false}
        borderRadius={'sm'}
        themeType={themeType}
        layer={layer}
        style={{
          height: totalHeight,
        }}
      >
        <FancyTextInput
          ref={inputRef}
          {...inputProps}
          value={searchValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          themeType={themeType}
          layer={layer}
          autoComplete="off"
        />

        {isFocused && (
          <div ref={contentRef}>
            {filteredItems.length > 0 ? (
              <ItemsList ref={listRef} $maxHeight={maxHeight}>
                {filteredItems.map((item, index) => (
                  <SearchItem
                    key={item.id}
                    $isHovered={index === hoveredIndex}
                    $themeType={themeType}
                    onClick={() => handleItemSelect(item)}
                    onMouseEnter={() => setHoveredIndex(index)}
                  >
                    <FancyItemContent
                      item={item}
                      layoutMode={itemLayoutMode}
                      gapBetweenIcon="xs"
                      imageSize="lg"
                      imageBorderRadius="xs"
                      iconNoPadding={true}
                    />
                  </SearchItem>
                ))}
              </ItemsList>
            ) : String(searchValue).trim() && filteredItems.length === 0 ? (
              <NoItemsText>{noItemsText}</NoItemsText>
            ) : openOnFocus && String(searchValue).trim() === '' ? (
              <ItemsList ref={listRef} $maxHeight={maxHeight}>
                {items.slice(0, 5).map((item, index) => (
                  <SearchItem
                    key={item.id}
                    $isHovered={index === hoveredIndex}
                    $themeType={themeType}
                    onClick={() => handleItemSelect(item)}
                    onMouseEnter={() => setHoveredIndex(index)}
                  >
                    <FancyItemContent
                      item={item}
                      layoutMode={itemLayoutMode}
                      gapBetweenIcon="xs"
                      imageSize="lg"
                      imageBorderRadius="xs"
                      iconNoPadding={true}
                    />
                  </SearchItem>
                ))}
              </ItemsList>
            ) : null}
          </div>
        )}
      </FancyBox>
    </SearchSelectWrapper>
  );
}
