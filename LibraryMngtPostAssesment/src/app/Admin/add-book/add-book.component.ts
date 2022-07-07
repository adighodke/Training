import { ApiService } from './../../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;
  actionBtn: string = 'Save';
  editData: any;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editBook: any,
    private dailogRef: MatDialogRef<AddBookComponent>
  ) {}

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      authorName: ['', Validators.required],
      publication: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
    });

    if (this.editBook) {
      this.actionBtn = 'Update';
      this.bookForm.controls['bookName'].setValue(this.editBook.bookName);
      this.bookForm.controls['authorName'].setValue(this.editBook.authorName);
      this.bookForm.controls['publication'].setValue(this.editBook.publication);
      this.bookForm.controls['price'].setValue(this.editBook.price);
      this.bookForm.controls['quantity'].setValue(this.editBook.quantity);
    }
  }
  addBook() {
    if (!this.editData) {
      if (this.bookForm.valid) {
        this.api.postBook(this.bookForm.value).subscribe({
          next: (res) => {
            alert('Book added sucessfully');
            //this.bookForm.reset();
            this.dailogRef.close('save');
          },
          error: () => {
            alert('error add book');
          },
        });
      }
    } else {
      this.updateBook();
    }
  }
  updateBook() {
    this.api.patchBook(this.bookForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert('book updated');
        this.bookForm.reset();
        this.dailogRef.close('update');
      },
      error: () => {
        alert('Error while update');
      },
    });
  }
}
