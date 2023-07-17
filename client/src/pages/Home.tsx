import {useContext, useEffect, useState} from "react";
import AppNav from "../components/AppNav";
import { ProductShow } from "../components/ProductShow";
import { BestOffer } from "../components/BestOffer";
import { AppFooter } from "../components/AppFooter";
import { AppContext } from "../context/AppContext";
import {CategoryInterface} from "../lib/types";
import {getCategories} from "../lib/api/category";
import CategoryCard from "../components/cards/CategoryCard";
export default function Home() {
  const { isBlur } = useContext(AppContext);
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    const [hidden, setHidden] = useState<boolean>(true);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            setCategories(data);
            setHidden(false);
            setIsVisible(true);
        };
        void fetchCategories();
    }, []);

  return (
    <div className="relative w-full h-screen">
      <header>
        <AppNav />
      </header>
      <main className={`${!isBlur ? "" : "blur-sm"} mt-12`}>
          <ProductShow />
          <h1 className="header bold my-12 -mb-4">Best Deals</h1>
          {  hidden && <h1 className="text-center mt-8">Loading Deals...</h1> }
          <section
              className="flexStart py-4 pl-2 flex-nowrap gap-6 w-full overflow-x-scroll h-fit mt-6"
          >
            <BestOffer />
          </section>
          <CategoryCard categories={categories} isVisible={hidden} />
      </main>
        <footer className="mt-44">
            { isVisible && <AppFooter /> }
        </footer>
    </div>
  );
}
