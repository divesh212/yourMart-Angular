import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  image: File
  productId: number
  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id')
    console.log(this.productId);
  }

  onFileSelected(event){
    this.image = event.target.files[0];
    console.log(this.image)
  }
  
  uploadImage(){

    let form = new FormData()
    form.append('image', this.image)
    this.imageService.uploadImage(form, this.productId).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

}
