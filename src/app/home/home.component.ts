import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : any
  dropdownHeading : string = 'name'
  searchBy : string
  token : string 
  categories : any
  status: string
  statusId: number = 0
  sortBy: string
  selectedCategory: string = 'category'
  selectedCategoryId: number
  constructor(private productService: ProductService,  private userService : UserService) { }

  ngOnInit() {

    this.token = localStorage.getItem('token')
    this.productService.getCategories().subscribe((categoies)=> {
      this.categories = categoies
    })
    this.productService.getProducts().subscribe( products => {
      this.products = products
    })
  }

  searchProducts(searchQuery) {
    console.log(searchQuery);
    this.productService.getProducts(this.dropdownHeading,searchQuery).subscribe( products => {
      this.products = products
    })
    
  }

  setSearchKey(key) {
    this.dropdownHeading = key
  }

  setStatus(status, statusId) {
    this.status = status;
    this.statusId = statusId
  }

  setSortBy(sortBy) {
    this.sortBy = sortBy;
  }

  setCategory(category) {
    this.selectedCategory = category.name
    this.selectedCategoryId = category.id
    console.log("category set");
  }

  applyAll(searchValue){
    console.log(this.searchBy)
    console.log(searchValue);
    console.log(this.status)
    console.log(this.statusId)
    console.log(this.sortBy);
    console.log(this.selectedCategoryId)
    this.productService.getProducts(this.searchBy,searchValue,this.sortBy,this.statusId,this.selectedCategoryId).subscribe( products => {
      this.products = products
    })
  }

}
