import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productid: any
  productData: any
  imagesLoaded: boolean
  images: any[]
  constructor(private productService: ProductService, private route: ActivatedRoute,
              private router: Router, private imageService: ImageService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.productid = params['id']
        this.productService.getProduct(this.productid).subscribe( (data: any) => {
          this.productData = data;
          console.log(this.productData)
        } 
      )}
    )
    
  this.imageService.getProductImages(this.productid).subscribe(
    (images : any) => {
      this.images = images
      this.imagesLoaded = true
    }
  )

  }

}
