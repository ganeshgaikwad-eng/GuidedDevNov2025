define("UsrYacht_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "f02f55b9-8fda-4489-b25b-92573b6d373e",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_0wmpzj1",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_0wmpzj1_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_vsna80b",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_vsna80b_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAverageTicketPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtParameter"
						}
					},
					"icon": "pen-icon"
				},
				"parentName": "Button_0wmpzj1",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "warning-filled-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RegCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrRedCode_mi0vy8a",
					"labelPosition": "auto",
					"control": "$PDS_UsrRedCode_mi0vy8a",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_uk34eo2",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_uk34eo2"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_7zbbodh",
					"labelPosition": "auto",
					"control": "$PDS_UsrTicketPrice_7zbbodh",
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_nnjlfzj",
					"labelPosition": "auto",
					"control": "$PDS_UsrDriveType_nnjlfzj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_mi4trkn",
					"labelPosition": "auto",
					"control": "$PDS_UsrStatus_mi4trkn",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_91vccyh",
					"labelPosition": "auto",
					"control": "$PDS_UsrPassengersCount_91vccyh"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_tg40olp",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_tg40olp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CrewCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_05uqqpd",
					"labelPosition": "auto",
					"control": "$PDS_UsrCrewCount_05uqqpd"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EmailInput_t0e3723",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "#ResourceString(EmailInput_t0e3723_label)#",
					"control": "$PDS_UsrManagerEmail_4h7imjq",
					"labelPosition": "left",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(EmailInput_t0e3723_caption)#",
					"readonly": true,
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_yf69uwt",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_yf69uwt",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_iswb579",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_iswb579",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_k2vifgf",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_k2vifgf",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Input_k53w1gl",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(Input_k53w1gl_label)#",
					"control": "",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "MultiSelectCategory",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(MultiSelectCategory_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYacht",
					"selectSchemaName": "UsrYachtCategoryStorage",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_dwilrwy",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_dwilrwy_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_xit7dqd",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_dwilrwy",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_qr18cdf",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_xit7dqd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_oam84o6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_oam84o6_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_qr18cdf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_dha2c11",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_dha2c11_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_pf0u0bnDS"
						}
					}
				},
				"parentName": "FlexContainer_qr18cdf",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_dc5ygym",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_dc5ygym_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_qr18cdf",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_29agb1b",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_29agb1b_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_pf0u0bn"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_dc5ygym",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_80w0g1w",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_80w0g1w_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_dc5ygym",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_w4fm5pq",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_w4fm5pq_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_w4fm5pq_GridDetail_pf0u0bn",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_pf0u0bn"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_w4fm5pq_SearchValue",
							"GridDetailSearchFilter_w4fm5pq_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_qr18cdf",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_cc1ec09",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_dwilrwy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_pf0u0bn",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_pf0u0bn",
					"primaryColumnName": "GridDetail_pf0u0bnDS_Id",
					"columns": [
						{
							"id": "14c69a6a-3dbb-072a-e447-1dcc0c3f1b1d",
							"code": "GridDetail_pf0u0bnDS_UsrStartDate",
							"caption": "#ResourceString(GridDetail_pf0u0bnDS_UsrStartDate)#",
							"dataValueType": 8,
							"width": 147
						},
						{
							"id": "02a237c8-6f49-22ae-44d2-174d2c3a0026",
							"code": "GridDetail_pf0u0bnDS_UsrEndDate",
							"caption": "#ResourceString(GridDetail_pf0u0bnDS_UsrEndDate)#",
							"dataValueType": 8,
							"width": 125
						},
						{
							"id": "d9b2db2b-8543-cc35-12cd-956684d6aec6",
							"code": "GridDetail_pf0u0bnDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_pf0u0bnDS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 171
						},
						{
							"id": "4ba0aa65-2713-6715-f2c6-b6573282271a",
							"code": "GridDetail_pf0u0bnDS_UsrParentYacht",
							"caption": "#ResourceString(GridDetail_pf0u0bnDS_UsrParentYacht)#",
							"dataValueType": 10,
							"width": 168
						},
						{
							"id": "0bea3a3f-ba65-84d2-1220-f5331f844904",
							"code": "GridDetail_pf0u0bnDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_pf0u0bnDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_cc1ec09",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_uk34eo2": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrDriveType_nnjlfzj": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrStatus_mi4trkn": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrPassengersCount_91vccyh": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(PaasengersCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCrewCount_05uqqpd": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(CrewCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrManager_tg40olp": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrComment_iswb579": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_UsrRedCode_mi0vy8a": {
						"modelConfig": {
							"path": "PDS.UsrRedCode"
						}
					},
					"PDS_UsrCountry_yf69uwt": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_k2vifgf": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrTicketPrice_7zbbodh": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrManagerEmail_4h7imjq": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_4h7imjq"
						}
					},
					"GridDetail_pf0u0bn": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_pf0u0bnDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_w4fm5pq_GridDetail_pf0u0bn",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_pf0u0bn_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_pf0u0bnDS_UsrStartDate": {
									"modelConfig": {
										"path": "GridDetail_pf0u0bnDS.UsrStartDate"
									}
								},
								"GridDetail_pf0u0bnDS_UsrEndDate": {
									"modelConfig": {
										"path": "GridDetail_pf0u0bnDS.UsrEndDate"
									}
								},
								"GridDetail_pf0u0bnDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_pf0u0bnDS.UsrCustomer"
									}
								},
								"GridDetail_pf0u0bnDS_UsrParentYacht": {
									"modelConfig": {
										"path": "GridDetail_pf0u0bnDS.UsrParentYacht"
									}
								},
								"GridDetail_pf0u0bnDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_pf0u0bnDS.CreatedOn"
									}
								},
								"GridDetail_pf0u0bnDS_Id": {
									"modelConfig": {
										"path": "GridDetail_pf0u0bnDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_pf0u0bn_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_pf0u0bnDS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht",
							"attributes": {
								"UsrManagerEmail_4h7imjq": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_pf0u0bnDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrParentYacht": {
									"path": "UsrParentYacht"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{

				request: "usr.PushButtonRequest",

				/* Implementation of the custom query handler. */

				handler: async (request, next) => {

					console.log("Button works...");

					Terrasoft.showInformation("My button was pressed.");

					var price = await request.$context.PDS_UsrPrice_uk34eo2;

					console.log("Price = " + price);

					request.$context.PDS_UsrComment_iswb579 = "comment from JS code!";

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}

			},

			{

				request: "crt.HandleViewModelAttributeChangeRequest",

				/* The custom implementation of the system query handler. */

				handler: async (request, next) => {

      				if (request.attributeName === 'PDS_UsrPrice_uk34eo2' || 		        // if price changed

					   request.attributeName === 'PDS_UsrPassengersCount_91vccyh' ) { 		// or Passengers count changed

						let price = await request.$context.PDS_UsrPrice_uk34eo2;

						let passengers = await request.$context.PDS_UsrPassengersCount_91vccyh;

						let ticket_price = price / passengers;

						request.$context.PDS_UsrTicketPrice_7zbbodh = ticket_price;

					}

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}

			},

	{
    request: "crt.HandleViewModelAttributeChangeRequest",
    handler: async (request, next) => {

        if (request.attributeName === "PDS_UsrPrice_uk34eo2") {

            // Direct number value from NumberInput
            const priceValue = await request.$context.PDS_UsrPrice_uk34eo2;

            const isPriceGreaterThan1000 = Number(priceValue) > 1000;

            if (isPriceGreaterThan1000) {
                request.$context.enableAttributeValidator(
                    "PDS_UsrComment_iswb579",
                    "required"
                );
            } else {
                request.$context.disableAttributeValidator(
                    "PDS_UsrComment_iswb579",
                    "required"
                );
            }
        }

        return next?.handle(request);
    }
}

		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.

			Format the validator type in PascalCase. */

			"usr.DGValidator": {

				validator: function (config) {

					return function (control) {

						let value = control.value;

						let minValue = config.minValue;

						let valueIsCorrect = value >= minValue;

						var result;

						if (valueIsCorrect) {

							result = null;

						} else {

							result = {

								"usr.DGValidator": { 

									message: config.message

								}

							};

						}

						return result;

					};

				},

				params: [

					{

						name: "minValue"

					},

					{

						name: "message"

					}

				],

				async: false

			}
		}/**SCHEMA_VALIDATORS*/
	};
});