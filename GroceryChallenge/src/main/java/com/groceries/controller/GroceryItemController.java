package com.groceries.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.groceries.model.GroceryItem;
import com.groceries.service.GroceryItemService;

@RestController
@RequestMapping("/groceryitem")
@CrossOrigin(origins= {"http://localhost:3000"})
public class GroceryItemController {
	
	@Autowired
	GroceryItemService gis;
	
	@GetMapping("/all")
	public Iterable<GroceryItem> findAll() {
		return gis.grabAll();
	}
	
	@GetMapping("/{id}")
	public GroceryItem findById(@PathVariable("id") int id) {
		return gis.grabById(id);
	}
	
	@PostMapping("/new")
	public String insert(@RequestBody GroceryItem gi) {
		gis.addGroceryItem(gi);
		return "Saved Grocery Item";
	}
	
	

}
