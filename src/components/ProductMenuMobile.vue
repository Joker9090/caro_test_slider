<template>
  <div class="ProductMenuMobile" v-bind:class="{ active: active }">
    <div class="toggleClick" />
    <div class="MenuWrapper">
      <div class="section">
        <div class="sectionItem"><p>Marcas</p></div>
        <div class="sectionItem">
          <div class="clickItem" data-id="menu-category-open">
            <p>Productos</p>
          </div>
          <div class="activeItems" data-id="menu-category">
            <ul class="categories">
              <li
                :data-id="category.id"
                v-for="(category, i) in categories"
                :key="i"
              >
                <div class="sectionItem">
                  <div class="clickItem" data-id="menu-subcategory-open">
                    <p>{{ category.label }}</p>
                  </div>
                  <div class="activeItems">
                    <ul class="subCategories" data-id="menu-subcategory">
                      <li
                        :data-id="category.id"
                        v-for="(subCategory, i) in subCategoriesFiltered(
                          category.id
                        )"
                        :key="i"
                      >
                        <div class="sectionItem">
                          <div class="clickItem" data-id="menu-products-open">
                            <p>{{ subCategory.label }}</p>
                          </div>
                          <div class="activeItems">
                            <ul class="products" data-id="menu-product">
                              <li
                                :data-id="subCategory.id"
                                v-for="(product, i) in productsFiltered(
                                  subCategory.id
                                )"
                                :key="i"
                              >
                                <div class="sectionItem">
                                  <p>{{ product.label }}</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="sectionItem"><p>LifeStyle</p></div>
        <div class="sectionItem"><p>Profesionales</p></div>
        <div class="dummyContent" />
      </div>
      <div class="section">
        <div class="dummyContent" />
      </div>
      <div class="section">
        <div class="dummyContent" />
        <div class="dummyContent" />
        <div class="dummyContent" />
      </div>
    </div>
  </div>
</template>

<script>
const categories = [
  { id: 0, label: "Sillones", slug: "sillones", image: "URLIMAGE" },
  { id: 1, label: "Sillas", slug: "slug", image: "URLIMAGE" },
  { id: 2, label: "Mesas", slug: "slug", image: "URLIMAGE" },
  { id: 3, label: "Comodas", slug: "slug", image: "URLIMAGE" },
  { id: 4, label: "Baño", slug: "slug", image: "URLIMAGE" },
  { id: 5, label: "Cocina", slug: "slug", image: "URLIMAGE" },
  { id: 6, label: "Sillones", slug: "slug", image: "URLIMAGE" },
  { id: 7, label: "Sillas", slug: "slug", image: "URLIMAGE" },
  { id: 8, label: "Mesas", slug: "slug", image: "URLIMAGE" },
  { id: 9, label: "Comodas", slug: "slug", image: "URLIMAGE" },
];

// subCategories.parentId => categories.id

const subCategories = [
  { id: 0, parentId: 0, label: "Sillon 1", slug: "slug" },
  { id: 1, parentId: 0, label: "Sillon 2", slug: "slug" },
  { id: 2, parentId: 0, label: "Sillon 3", slug: "slug" },
  { id: 3, parentId: 0, label: "Sillon 4", slug: "slug" },
  { id: 4, parentId: 0, label: "Sillon 5", slug: "slug" },
  { id: 5, parentId: 1, label: "Sillas 6", slug: "slug" },
  { id: 6, parentId: 1, label: "Sillas 7", slug: "slug" },
  { id: 7, parentId: 1, label: "Sillas 8", slug: "slug" },
  { id: 8, parentId: 1, label: "Sillas 9", slug: "slug" },
  { id: 9, parentId: 2, label: "Mesas 10", slug: "slug" },
  { id: 10, parentId: 2, label: "Mesas 11", slug: "slug" },
  { id: 11, parentId: 2, label: "Mesas 12", slug: "slug" },
  { id: 12, parentId: 2, label: "Mesas 13", slug: "slug" },
  { id: 13, parentId: 2, label: "Mesas 14", slug: "slug" },
  { id: 14, parentId: 2, label: "Mesas 15", slug: "slug" },
  { id: 15, parentId: 2, label: "Mesas 16", slug: "slug" },
];

// products.parentId => subCategories.id

const products = [
  { id: 0, parentId: 0, label: "producto 1", slug: "slug" },
  { id: 1, parentId: 0, label: "producto 2", slug: "slug" },
  { id: 2, parentId: 0, label: "producto 3", slug: "slug" },
  { id: 3, parentId: 0, label: "producto 4", slug: "slug" },
  { id: 4, parentId: 0, label: "producto 5", slug: "slug" },
  { id: 5, parentId: 1, label: "producto 6", slug: "slug" },
  { id: 6, parentId: 1, label: "producto 7", slug: "slug" },
  { id: 7, parentId: 1, label: "producto 8", slug: "slug" },
  { id: 8, parentId: 1, label: "producto 9", slug: "slug" },
  { id: 9, parentId: 2, label: "producto 10", slug: "slug" },
  { id: 10, parentId: 2, label: "producto 11", slug: "slug" },
  { id: 11, parentId: 2, label: "producto 12", slug: "slug" },
  { id: 12, parentId: 2, label: "producto 13", slug: "slug" },
  { id: 13, parentId: 2, label: "producto 14", slug: "slug" },
  { id: 14, parentId: 2, label: "producto 15", slug: "slug" },
  { id: 15, parentId: 2, label: "producto 16", slug: "slug" },
];

export default {
  name: "ProductMenuMobile",
  props: {
    active: Boolean,
  },
  data: () => ({
    categories,
    subCategories,
    products,
  }),
  mounted() {
    document.querySelector('[data-id="menu-category-open"]').onclick = () => {
      document
        .querySelectorAll('[data-id="menu-category"] ul.categories > li')
        .forEach((item) => {
          item.classList.toggle("show");
        });
    };

    document
      .querySelectorAll('[data-id="menu-subcategory-open"]')
      .forEach((item) => {
        item.onclick = (e) => {
          console.log(
            e.target
              .closest(".sectionItem")
              .querySelectorAll(".activeItems ul > li")
          );
          document;
          e.target
            .closest(".sectionItem")
            .querySelectorAll(".activeItems ul.subCategories > li")
            .forEach((item) => {
              item.classList.toggle("show");
            });
        };
      });

      document
      .querySelectorAll('[data-id="menu-products-open"]')
      .forEach((item) => {
        item.onclick = (e) => {
          console.log(
            e.target
              .closest(".sectionItem")
              .querySelectorAll(".activeItems ul > li")
          );
          document;
          e.target
            .closest(".sectionItem")
            .querySelectorAll(".activeItems ul.products > li")
            .forEach((item) => {
              item.classList.toggle("show");
            });
        };
      });
  },
  methods: {
    subCategoriesFiltered: (id) => {
      return subCategories.filter((sc) => sc.parentId == id);
    },
    productsFiltered: (id) => products.filter((p) => p.parentId == id),
  },
};
</script>

<style scoped>
.ProductMenuMobile {
  position: fixed;
  background-color: #00000036;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 100%;
  z-index: 999;
  opacity: 0;
  transition: all 0.2s ease;
}
.ProductMenuMobile.active {
  left: 0px;
  opacity: 1;
}
.ProductMenuMobile .MenuWrapper {
  width: 70%;
  max-width: 500px;
  background-color: white;
  height: 100%;
  margin-left: auto;
  overflow-y: auto;
  height: auto;
  max-height: 100vh;
}
.ProductMenuMobile .MenuWrapper .section {
  min-height: 200px;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ProductMenuMobile .MenuWrapper .sectionItem {
}
.dummyContent {
  min-height: 40px;
  width: 100%;
  background-color: grey;
  margin-bottom: 10px;
  margin-top: 10px;
}
ul li:not(.show) {
  display: none;
}
ul li.active {
  font-weight: bold;
}
</style>
