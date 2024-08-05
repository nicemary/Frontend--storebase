import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      data => this.items = data,
      error => console.error('Error fetching items:', error)
    );
  }
}
