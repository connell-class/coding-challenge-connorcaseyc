package com.groceries.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class GroceryItem {

	@Id
	@Column(name = "gi_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gi_id;
	
	@Column(name="item")
	private String item;
	
	@Column
	@Enumerated(EnumType.STRING)
	private ItemType itemtype;
	
//	@JsonIgnore
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="g_items")
	private GroceryList g_items;

	public int getGi_id() {
		return gi_id;
	}

	public void setGi_id(int gi_id) {
		this.gi_id = gi_id;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public ItemType getItemtype() {
		return itemtype;
	}

	public void setItemtype(ItemType itemtype) {
		this.itemtype = itemtype;
	}

	public GroceryList getG_items() {
		return g_items;
	}

	public void setG_items(GroceryList g_items) {
		this.g_items = g_items;
	}

	@Override
	public String toString() {
		return "GroceryItem [gi_id=" + gi_id + ", item=" + item + ", itemtype=" + itemtype + ", g_items=" + g_items
				+ "]";
	}

	public GroceryItem(int gi_id, String item, ItemType itemtype, GroceryList g_items) {
		super();
		this.gi_id = gi_id;
		this.item = item;
		this.itemtype = itemtype;
		this.g_items = g_items;
	}
	
	public GroceryItem(int gi_id, String item, ItemType itemtype) {
		super();
		this.gi_id = gi_id;
		this.item = item;
		this.itemtype = itemtype;
	}
	
	public GroceryItem() {}
	
}
