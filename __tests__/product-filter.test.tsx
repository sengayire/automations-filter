import React from 'react'
import { render, fireEvent, screen } from "@testing-library/react";
import { ProductFilter } from "../src/modules/components/product-filter";
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import '@testing-library/jest-dom' 

describe("useClickOutside", () => {
   it("should call the callback when clicking outside the ref element", () => {
    const callbackMock = jest.fn();
    render(
      <ProductFilter />
    );
    mockAllIsIntersecting(true);

    fireEvent.click(screen.getByTestId('filter-id'));

    expect(callbackMock).not.toHaveBeenCalled();
    
    fireEvent.click(screen.getByTestId('filter-id'));
  });
   it('should toggle "Extract Data" button', () => {
    render(<ProductFilter />);
    const extractButton = screen.getByText('Extract Data');
    fireEvent.click(extractButton);
    expect(extractButton).toHaveClass('title');
  });

  it('should toggle "Monitor" button', () => {
    render(<ProductFilter />);
    const monitorButton = screen.getByText('Monitor');
    fireEvent.click(monitorButton);
    expect(monitorButton).toHaveClass('title');
  });
  
  it('should filter sites based on search input', () => {
    render(<ProductFilter />);
    const filterSite = screen.getByText('Filter by Site');
    fireEvent.click(filterSite);
    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'linkedIn' } });
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });
});
