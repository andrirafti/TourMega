const products=[{name:"Book",price:12.49},{name:"Music CD",price:14.99},{name:"Chocolate Bar",price:0.85},{name:"Imported Box of Chocolates",price:10.00},{name:"Imported Bottle Of Perfume",price:47.50},{name:"Imported Bottle Of Perfume",price:27.99},{name:"Bottle Of Perfume",price:18.99},{name:"Packet Of Headache Pills",price:9.75},{name:"Box Of Imported Chocolates",price:11.25}]
//Sales tax is 10% for all good except Books/Food/Medicine
//Sales tax is an additonal +5% for imported goods. NO MATTER WHAT even if they are books/food/medicine// 

function FirstOrder(salestax) {
  let FirstPurchase = products.filter((val) => val.name == "Book" || val.name == "Music CD" || val.name == "Chocolate Bar")
 //
let TaxedItems=FirstPurchase.splice(1,1)
//
let TaxedTotal=TaxedItems.map(val=>val.price).reduce((a,b)=>a+b)
//
let NotTaxed=FirstPurchase.map(val=>val.price)
//
let SalesTaxTotal=TaxedItems.map((val)=>val.price)*salestax
let TAXEDAMOUNT=SalesTaxTotal.toFixed(1)
//
let NotTaxedTotal=NotTaxed.reduce((a,b)=>a+b)
//Answer Below//
console.log(NotTaxedTotal+TaxedTotal+Number(TAXEDAMOUNT))

}
FirstOrder(0.10)
///Question 2///
function OrderTwo(salestax,salestax2){
  let SecondPurchase= products.filter(val=>val.name.includes("Imported"))

 SecondPurchase.splice(2,2)

 let ChoclateTotal=SecondPurchase[0].price+SecondPurchase[0].price*salestax2

 let PerfumeTotal=SecondPurchase[1].price+SecondPurchase[1].price*salestax

let total=PerfumeTotal+ChoclateTotal
console.log(total)

}
OrderTwo(0.15,0.05)
//Q 3//
function  OrderThree(salestax,salestax2,salestax3){
 let filtered=products.filter((val)=>val.name.includes("Perfume") || val.name.includes("Pills")||val.name.includes("Chocolates"))


filtered.splice(0,2)

let perfumeImport=filtered[0].price+filtered[0].price*salestax2
let ImportedPerfumeAnswer=perfumeImport.toFixed(2)
//
let RegularPerfume=filtered[1].price+filtered[1].price*salestax
let PerfumeNormalAnswer=RegularPerfume.toFixed(2)
//
let Pills=filtered[2].price
let ImportedChocolate=filtered[3].price+filtered[3].price*salestax3
let choctotal=ImportedChocolate.toFixed(2)
console.log(Number(choctotal)+Number(Pills)+Number(PerfumeNormalAnswer)+Number(ImportedPerfumeAnswer))
}
OrderThree(0.10,0.15,0.05)