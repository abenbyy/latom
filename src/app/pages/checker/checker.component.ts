import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.scss']
})
export class CheckerComponent implements OnInit {

  currCategoryId: number
  currPart: string

  mCategory = []

  dummyCategories = [
    {
      id: 1,
      category: 'Abdomen, Pelvis & Buttocks'
    },
    {
      id: 2,
      category: 'Arms & Shoulder'
    },
    {
      id: 3,
      category: 'Chest & Back'
    },
    {
      id: 4,
      category: 'Head, Throat & Neck'
    }
  ]

  dummyParts = [
    [
      // Abdomen, Pelvis & Buttocks
      {
        part: 'Abdomen',
      },
      {
        part: 'Buttocks & Rectum',
      },
      {
        part: 'Genitals & Groin',
      },
      {
        part: 'Hips & Hip Joint',
      },
    ],
    [
      // Arms & Shoulder
      {
        part: 'Arms',
      },
      {
        part: 'Hands',
      },
      {
        part: 'Shoulder',
      },
      {
        part: 'Wrists',
      },
    ],
    [
      // Chest & Back
      {
        part: 'Heart',
      },
      {
        part: 'Chest',
      },
      {
        part: 'Back',
      },
      {
        part: 'Lung',
      },
    ],
    [
      // Head, Throat & Neck
      {
        part: 'Frontal Lobe',
      },
      {
        part: 'Occipital Lobe',
      },
      {
        part: 'Throat',
      },
      {
        part: 'Neck',
      },
      {
        part: 'Eye',
      },
      {
        part: 'Nose',
      },
      {
        part: 'Ear',
      },
    ],    
  ]

  constructor() {}
  
  selectCategory(id: number){
    this.currCategoryId = id;
    this.clearCategories();
    document.querySelectorAll('.category')[id].classList.add('activated');
    
  }

  clearCategories(){
    for(let i=0;i<document.querySelectorAll('.category').length;i++){
      document.querySelectorAll('.category')[i].classList.remove('activated');

    }
  }

  ngOnInit(): void {
    this.currCategoryId = -1;
    var checkRender = setInterval(function(){
      if(document.querySelectorAll('.category').length){
          let temp = document.querySelectorAll('.category');
          console.log(temp)
          // for(let i=0;i<temp.length;i++){

          //   this.mCategory.push(temp[i] as HTMLElement);

          // }

        clearInterval(checkRender)
      }
    }, 100)

    

    
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

}
