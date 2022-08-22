package com.esps.ecommerce.dtos;

import lombok.Data;

@Data

public class ProductDTO {

	private Long id;

	private String reference;
	private String designation;
	private Float prixAchat;
	private Float prixVente;
	private String marque;
	private Long qtestock;
	private String caracteristiques;
	private String imageartpetitf;

}