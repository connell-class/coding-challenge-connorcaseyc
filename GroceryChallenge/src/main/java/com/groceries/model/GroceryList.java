package com.groceries.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class GroceryList {
	
	@Id
	@Column(name = "gl_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gl_id;
	
	@Column
	private String listname;
	
//	@JsonIgnore
	@OneToMany(mappedBy="g_items", cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	private List<GroceryItem> g_items;

	public int getGl_id() {
		return gl_id;
	}

	public void setGl_id(int gl_id) {
		this.gl_id = gl_id;
	}

	public List<GroceryItem> getG_items() {
		return g_items;
	}

	public void setG_items(List<GroceryItem> g_items) {
		this.g_items = g_items;
	}

	public String getListname() {
		return listname;
	}

	public void setListname(String listname) {
		this.listname = listname;
	}

	@Override
	public String toString() {
		return "GroceryList [gl_id=" + gl_id + ", listname=" + listname + ", g_items=" + g_items + "]";
	}

	public GroceryList(int gl_id, String listname, List<GroceryItem> g_items) {
		super();
		this.gl_id = gl_id;
		this.listname = listname;
		this.g_items = g_items;
	}

	public GroceryList() {}
	
}
