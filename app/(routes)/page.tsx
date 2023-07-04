import getBillboards from "@/action/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

import getProducts from "@/action/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards("43cc74d6-e915-47b3-ae54-8652576b5cca");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured product" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
