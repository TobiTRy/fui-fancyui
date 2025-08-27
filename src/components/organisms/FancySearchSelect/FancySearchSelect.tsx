'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { FancyBox } from '@/components/atoms/FancyBox';
import FancySearchSelectItem from '@/components/organisms/FancySearchSelect/FancySearchSelectItem/FancySearchSelectItem';
import { FancyTextInput } from '@/components/organisms/FancyTextInput';
import { TFancySearchSelectWithHTMLProps, TSearchSelectItem } from './FancySearchSelect.model';
import { DropdownContainer, ItemsList, NoItemsText, SearchSelectWrapper } from './FancySearchSelect.style';

/**
 * FancySearchSelect component with search and select functionality using absolute positioned dropdown
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
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);

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

  // Get available items for display and navigation
  const availableItems = filteredItems.length > 0 ? filteredItems : openOnFocus ? items : [];

  // Show dropdown when items are available and input is focused
  const shouldShowDropdown =
    isFocused && (filteredItems.length > 0 || (openOnFocus && String(searchValue).trim() === ''));

  // Handle search input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    setHoveredIndex(-1); // Reset selection when search changes
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
    if (availableItems.length === 0) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        // If not focused, show dropdown first
        if (!isFocused) setIsFocused(true);

        setHoveredIndex((prev) => {
          const newIndex = prev < availableItems.length - 1 ? prev + 1 : 0;
          scrollToItem(newIndex);
          return newIndex;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        // If not focused, show dropdown first
        if (!isFocused) setIsFocused(true);

        setHoveredIndex((prev) => {
          const newIndex = prev > 0 ? prev - 1 : availableItems.length - 1;
          scrollToItem(newIndex);
          return newIndex;
        });
        break;
      case 'Tab':
        // Only handle Tab if dropdown is open
        if (!shouldShowDropdown) return;
        e.preventDefault();
        setHoveredIndex((prev) => {
          const newIndex = prev < availableItems.length - 1 ? prev + 1 : 0;
          scrollToItem(newIndex);
          return newIndex;
        });
        break;
      case 'Enter':
        e.preventDefault();
        if (hoveredIndex >= 0 && hoveredIndex < availableItems.length) {
          const selectedItem = availableItems[hoveredIndex];
          handleItemSelect(selectedItem);
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
        borderRadius={'sm'}
        themeType={themeType}
        layer={layer}
        style={
          shouldShowDropdown
            ? {
                borderBottomLeftRadius: '0',
                borderBottomRightRadius: '0',
              }
            : undefined
        }
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
      </FancyBox>

      <DropdownContainer $isOpen={shouldShowDropdown} $zIndex={1000}>
        <div ref={contentRef}>
          <FancyBox borderRadius={['0', '0', 'sm', 'sm']} themeType={themeType} layer={layer}>
            {availableItems.length > 0 ? (
              <ItemsList ref={listRef} $maxHeight={maxHeight}>
                {availableItems.map((item, index) => (
                  <li key={item.id}>
                    <FancySearchSelectItem
                      item={item}
                      layer={index === hoveredIndex ? 1 : 2}
                      itemLayoutMode={itemLayoutMode}
                      outlined={false}
                      onClick={() => handleItemSelect(item)}
                      onMouseEnter={() => setHoveredIndex(index)}
                    />
                  </li>
                ))}
              </ItemsList>
            ) : String(searchValue).trim() && filteredItems.length === 0 ? (
              <NoItemsText>{noItemsText}</NoItemsText>
            ) : null}
          </FancyBox>
        </div>
      </DropdownContainer>
    </SearchSelectWrapper>
  );
}
