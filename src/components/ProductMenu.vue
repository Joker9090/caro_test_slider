<template>
  <div class="ProductMenu">
    <ul class="categories">
      <li
        :data-id="category.id"
        v-for="(category, i) in categories"
        :key="i"
        class="show"
        :data-image="category.image"
      >
        <p>{{ category.label }}</p>
      </li>
    </ul>
    <ul class="subCategories">
      <li
        :data-id="subCategory.id"
        :data-parentId="subCategory.parentId"
        v-for="(subCategory, i) in subCategories"
        :key="i"
      >
        <p>{{ subCategory.label }}</p>
      </li>
    </ul>
    <div class="productCol">
      <ul class="products">
        <li
          :data-id="product.id"
          :data-parentId="product.parentId"
          v-for="(product, i) in products"
          :key="i"
        >
          <p>{{ product.label }}</p>
        </li>
      </ul>
      <div class="imageHolder" />
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
  name: "ProductMenu",
  props: {},
  data: () => ({
    categories,
    subCategories,
    products,
  }),
  mounted() {
    const changeImage = (/*url*/) => document.querySelector('.imageHolder').style.background = 'red'; // aca caro para cxambiar la iamgen por background
    const activeTarget = (target) => target.classList.add("active");
    const desactiveAll = (queryParam) => {
      return [...document.querySelectorAll(queryParam)].map((item) =>
        item.classList.remove("active")
      );
    };
    const hideAll = (queryParam) => {
      return [...document.querySelectorAll(queryParam)].map((item) => {
        // HACK nodeList to array for map use
        item.classList.remove("active");
        item.classList.remove("show");
        return item;
      });
    };
    const showAllArr = (arr) =>
      [...arr].map((item) => item.classList.add("show"));
    const getId = (target) => target.getAttribute("data-id");
    const getParentId = (target) => target.getAttribute("data-parentId");
    const getOnlyChildren = (arr, id) =>
      arr.filter((item) => getParentId(item) == id);

    const hoverCategory = (targetDOM) => {
      // desactiva todas las categories, y solo activa una
      desactiveAll(".categories li");
      activeTarget(targetDOM);

      // image for future
      const image = targetDOM.getAttribute("data-image");
      console.log("image", image);
      changeImage(image);

      // esconde tambien todos los productos
      hideAll(".products li");

      // esconde todas las subCategories y solo muestra las que tienen el mismo parentId
      const hidenItems = hideAll(".subCategories li");
      const onlyChildrenItems = getOnlyChildren(hidenItems, getId(targetDOM));
      const shownedItems = showAllArr(onlyChildrenItems);
      console.log("shownedItems", shownedItems);
      return targetDOM;
    };
    const hoverSubCategory = (targetDOM) => {
      // desactiva todas las subcategories, y solo activa una
      desactiveAll(".subCategories li");
      activeTarget(targetDOM);

      // esconde todas los productos y solo muestra las que tienen el mismo parentId
      showAllArr(getOnlyChildren(hideAll(".products li"), getId(targetDOM)));
      return targetDOM;
    };
    document
      .querySelectorAll(".categories li")
      .forEach((li) =>
        li.addEventListener("mouseenter", () => hoverCategory(li))
      );
    document
      .querySelectorAll(".subCategories li")
      .forEach((li) =>
        li.addEventListener("mouseenter", () => hoverSubCategory(li))
      );
  },
  computed: {},
};
</script>

<style scoped>
.ProductMenu {
  display: flex;
  justify-content: space-around;
}
.ProductMenu ul {
  list-style: none;
  padding: 0;
}
ul.categories, ul.subCategories {
  width: 30%;
}
.productCol {
  width: 40%;
  display: flex;
  justify-content: space-around;
}
.productCol .imageHolder {
  aspect-ratio: 2/1;
  width:50%;
  background-color:grey;
}
ul li:not(.show) {
  display: none;
}
ul li.active {
  font-weight: bold;
}
</style>
