import React, { useState } from 'react';

import Paginator from '../../Atoms/Paginator/Paginator';

type Item = {
  id: number;
  name: string;
};

interface IFancyPageList {
  itemsPerPage?: number;
}

export default function FancyPageList(props: IFancyPageList) {
  const { itemsPerPage } = {...defaultProps ,...props};

  const [currentPage, setCurrentPage] = useState(1);

  const items: Item[] = Array.from({ length: 100 }).map((_, index) => ({ id: index, name: `Item ${index}` }));

  const totalPageCount  = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="content">
        {currentItems.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>

      <Paginator
        currentPage={currentPage}
        totalPages={totalPageCount}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}


const defaultProps = {
  itemsPerPage: 20,
}