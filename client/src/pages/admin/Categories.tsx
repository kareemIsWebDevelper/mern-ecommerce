import { useState } from "react";
import AdminNav from "../../components/AdminNav";
import { CreateCategory } from "../../components/forms/CreateCategory";
import { edit, remove } from "../../assets/index";

export default function Categories() {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    return (
        <div className="relative mt-16">
            <AdminNav />
            <button
              onClick={() => {
                setIsHidden(!isHidden);
              }}
              className={styles.newBtn}
            >
              {!isHidden ? "New Category" : "All Categories"}
            </button>
            {!isHidden ? (
              <section className={styles.categoryCard}>
                <div className={styles.categoryCardBody}>
                  <div className={styles.categoryCardHeader}>
                    Electronics Category
                  </div>
                  <div className="flexCenter gap-2">
                    {myButton.map((btn) => (
                      <img
                        key={btn.id}
                        src={btn.imageUrl}
                        alt={btn.alt}
                        className={btn.style}
                      />
                    ))}
                  </div>
                </div>
              </section>
            ) : (
              <CreateCategory />
            )}
      </div>
    );
}

const myButton = [
    {id: 1, imageUrl: edit, alt: 'Edit', style: 'w-10, h-10 cursor-pointer' },
    {id: 2, imageUrl: remove, alt: 'Remove', style: 'w-10, h-10 cursor-pointer' }
];


const styles = {
    newBtn: "bg-teal-400 text-white font-bold h-10 px-2 fixed top-1 right-2 z-20",
    categoryCard: "grid justify-center content-evenly gap-3 my-6",
    categoryCardBody: "flexBetween gap-8 bg-white shadow-lg border p-3",
    categoryCardHeader: "text-2xl font-bold",
    formGroup: 'mb-4'
}

