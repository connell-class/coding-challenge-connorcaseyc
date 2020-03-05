package com.groceries.dao;

import org.springframework.data.repository.CrudRepository;

import com.groceries.model.GroceryList;

public interface GroceryListDao extends CrudRepository<GroceryList, Integer> {
	
}
