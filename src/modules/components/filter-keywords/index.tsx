import { useProductFilter } from '@/hooks';
import { Button } from '@/modules/shared';
import { IoMdClose } from 'react-icons/io';

export const FilterKeywords = () => {
  const { keywords, categories, setCategories, setKeywords } =
    useProductFilter();

  const handleRemoveFilter = (itemIndex: number) => {
    const removeFilter = keywords.splice(itemIndex, 1) as unknown;
    setKeywords((prev) => {
      return prev.filter((filter) => filter !== removeFilter);
    });
  };

  return (
    <>
      {keywords?.map((filter, index) => {
        return (
          <Button
            key={index}
            title={filter}
            isSelected={keywords.length > 0}
            rightAdornment={
              <IoMdClose
                onClick={() => handleRemoveFilter(index)}
                data-testid='keyword-id'
              />
            }
          />
        );
      })}
      {categories && (
        <Button
          title={categories}
          isSelected={!!categories}
          rightAdornment={
            <IoMdClose
              onClick={() => {
                setCategories(undefined);
              }}
            />
          }
        />
      )}
    </>
  );
};
