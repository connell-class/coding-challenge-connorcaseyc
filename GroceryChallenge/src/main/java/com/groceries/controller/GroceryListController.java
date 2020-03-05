package com.groceries.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.groceries.model.GroceryList;
import com.groceries.service.GroceryListService;

@RestController
@RequestMapping("/grocerylist")
@CrossOrigin(origins="http://localhost:3000")
public class GroceryListController {
	
	@Autowired
	GroceryListService gls;
	
	@GetMapping("/all")
	public Iterable<GroceryList> findAll() {
		return gls.grabAll();
	}
	
	@PostMapping("/{id}")
	public GroceryList findById(@PathVariable("id") int id) {
		return gls.grabById(id);
	}
	
	@PostMapping("/choose")
	public GroceryList chooseList(@RequestBody GroceryList gl_id) {
		int id = gl_id.getGl_id();
		return gls.grabById(id);
	}
	
//	@RequestMapping(method=RequestMethod.POST, consumes="application/json", value="/choose")
//	public @ResponseBody GroceryList authList(@RequestBody int gl_id) {
//		return gls.grabById(gl_id);
//	}
	
	@PostMapping("/new")
	public String insert(@RequestBody GroceryList gl) {
		gls.addGroceryList(gl);
		return "Saved Grocery List";
	}

}
