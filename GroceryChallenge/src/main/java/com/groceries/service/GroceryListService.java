package com.groceries.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.groceries.dao.GroceryListDao;
import com.groceries.model.GroceryList;

@Service
public class GroceryListService {
	
	@Autowired
	GroceryListDao gld;
	
	public Iterable<GroceryList> grabAll() {
		return gld.findAll();
	}
	
	public GroceryList grabById(int id) {
		return gld.findById(id).get();
	}
	
	public void addGroceryList(GroceryList gl) {
		gld.save(gl);
	}
	
	public void deleteGroceryList(GroceryList gl) {
		gld.delete(gl);
	}
	
//	public GroceryList grabList(GroceryList gl) {
//		GroceryList gl2 = gld.findById(gl.getGl_id());
//		return gl2;
//	}

}
