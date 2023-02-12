<template>
    <div class="productCard">
        <img src="../assets/products/cadeira1/00b9ff0c.webp" alt="">
        <p class="productName">Cadeira Moderna</p>
        <p class="productValue">R$ 50,00</p>

    </div>
</template>

<script>
export default {
    name: "ProductCard"
}
</script>

<style lang="scss" scoped>
.productCard {
    width: 150px;


    img {
        width: 150px;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
    }

    .productName {
        /* margin-top: 12px; */
        font-size: 14px;
        line-height: 20px;
        color: #909090;
    }

    .productValue {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #303030;
    }
}

</style>