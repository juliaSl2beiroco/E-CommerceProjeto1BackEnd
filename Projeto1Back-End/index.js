const User = require("./User");
const Product = require("./Product");
const Seller = require("./Seller");

async function main() {
    const user1 = new User("Luiza", "12345678900", "lulu@utf.com", "gostodecachorro");
    user1.save();

    const seller1 = new Seller("Loja do Bruno", "98765432112345", "brunao@comercial.com", "quimica");
    await seller1.save();

    const product1 = new Product("Pelúcia Stitch", 100.00, "Pelúcia tamanho real", "98765432112345");
    await product1.save();

    await User.searchByCpf("12345678900");

    await Seller.searchByCnpj("98765432112345");

    await Product.searchByAdTitle("Pelúcia Stitch");

    await User.delete("12345678900");

    await Seller.delete("98765432112345");

    await Product.delete("Pelúcia Stitch");
}

main();