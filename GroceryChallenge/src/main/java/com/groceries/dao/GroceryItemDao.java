package com.groceries.dao;

import org.springframework.data.repository.CrudRepository;

import com.groceries.model.GroceryItem;

public interface GroceryItemDao extends CrudRepository<GroceryItem, Integer> {
	
}
