import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/ContextCart';
import { ArrowUp } from 'lucide-react';

const BtnRefetch = () => {
  const { hasNextPage, fetchNextPage, isFetchingNextPage } = useContext(CartContext);

  return (
    <>
      {hasNextPage && (
       <div className="w-full h-auto flex justify-center flex-row gap-2 mt-4">
  <ArrowUp size={20} className="mt-1" />
  <button className="border-none bg-transparent uppercase text-sm sm:text-base" disabled={isFetchingNextPage}
    onClick={() => fetchNextPage()}
  >
   {isFetchingNextPage ? (
            <>
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
              Loading...
            </>
          ) : (
            "Load More"
          )}
  </button>
</div>
      )}
    </>
  )
}

export default BtnRefetch