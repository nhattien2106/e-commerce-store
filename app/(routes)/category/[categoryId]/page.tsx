import getCategory from "@/action/get-category";

import getProducts from "@/action/get-products";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const category = getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category} />

        <div className="px-4 sm:px-6 "></div>
      </Container>
    </div>
  );
};

export default CategoryPage;
