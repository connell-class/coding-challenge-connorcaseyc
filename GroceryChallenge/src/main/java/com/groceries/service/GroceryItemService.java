package com.groceries.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.groceries.dao.GroceryItemDao;
import com.groceries.model.GroceryItem;

@Service
public class GroceryItemService {
	
	@Autowired
	GroceryItemDao gid;
	
	public Iterable<GroceryItem> grabAll() {
		return gid.findAll();
	}
	
	public GroceryItem grabById(int id) {
		return gid.findById(id).get();
	}
	
	public void addGroceryItem(GroceryItem gi) {
		gid.save(gi);
	}
	
	public void deleteGroceryItem(GroceryItem gi) {
		gid.delete(gi);
	}

}
