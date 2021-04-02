var parks = {
 "currentVersion": 10.61,
 "id": 0,
 "name": "Park Boundaries",
 "type": "Feature Layer",
 "description": "",
 "geometryType": "esriGeometryPolygon",
 "sourceSpatialReference": {
  "wkid": 102705,
  "latestWkid": 102705
 },
 "copyrightText": "",
 "parentLayer": null,
 "subLayers": [],
 "minScale": 0,
 "maxScale": 0,
 "drawingInfo": {
  "renderer": {
   "type": "simple",
   "symbol": {
    "type": "esriSFS",
    "style": "esriSFSSolid",
    "color": [
     56,
     168,
     0,
     255
    ],
    "outline": {
     "type": "esriSLS",
     "style": "esriSLSNull",
     "color": [
      110,
      110,
      110,
      255
     ],
     "width": 0
    }
   },
   "label": "",
   "description": ""
  },
  "transparency": 0,
  "labelingInfo": null
 },
 "defaultVisibility": true,
 "extent": {
  "xmin": -1.0781754918220544E7,
  "ymin": 4959801.389100896,
  "xmax": -1.0751436375830274E7,
  "ymax": 5001960.503899113,
  "spatialReference": {
   "wkid": 102100,
   "latestWkid": 3857
  }
 },
 "hasAttachments": false,
 "htmlPopupType": "esriServerHTMLPopupTypeAsHTMLText",
 "displayField": "IsNamePermanent",
 "typeIdField": null,
 "subtypeFieldName": null,
 "subtypeField": null,
 "defaultSubtypeCode": null,
 "fields": [
  {
   "name": "OBJECTID",
   "type": "esriFieldTypeOID",
   "alias": "OBJECTID",
   "domain": null
  },
  {
   "name": "ParkUnit",
   "type": "esriFieldTypeString",
   "alias": "Park Unit",
   "length": 50,
   "domain": {
    "type": "codedValue",
    "name": "qppParkUnit",
    "description": "Park Unit",
    "codedValues": [
     {
      "name": "10th & Charleston",
      "code": "10th & Charleston"
     },
     {
      "name": "27th & Old Cheney",
      "code": "27th & Old Cheney"
     },
     {
      "name": "27th & South Park",
      "code": "27th & South Park"
     },
     {
      "name": "34th & Madison Park",
      "code": "34th & Madison Park"
     },
     {
      "name": "3rd & A Overpass Park",
      "code": "3rd & A Overpass Park"
     },
     {
      "name": "3rd & F Underpass",
      "code": "3rd & F Underpass"
     },
     {
      "name": "45th & Gladstone Park",
      "code": "45th & Gladstone Park"
     },
     {
      "name": "48th & Adams Park",
      "code": "48th & Adams Park"
     },
     {
      "name": "Air Park West",
      "code": "Air Park West"
     },
     {
      "name": "American Legion Park",
      "code": "American Legion Park"
     },
     {
      "name": "Antelope Creek Greenway",
      "code": "Antelope Creek Greenway"
     },
     {
      "name": "Antelope Park North",
      "code": "Antelope Park North"
     },
     {
      "name": "Antelope Park South",
      "code": "Antelope Park South"
     },
     {
      "name": "Antelope Park Triangle",
      "code": "Antelope Park Triangle"
     },
     {
      "name": "Arbor Lake Conservation Area",
      "code": "Arbor Lake Conservation Area"
     },
     {
      "name": "Arnold Heights Park",
      "code": "Arnold Heights Park"
     },
     {
      "name": "Ashley Heights Park",
      "code": "Ashley Heights Park"
     },
     {
      "name": "Aster Park",
      "code": "Aster Park"
     },
     {
      "name": "Ballard Park",
      "code": "Ballard Park"
     },
     {
      "name": "Bea Richmond Park",
      "code": "Bea Richmond Park"
     },
     {
      "name": "Beal Slough Greenway",
      "code": "Beal Slough Greenway"
     },
     {
      "name": "Belmont Park",
      "code": "Belmont Park"
     },
     {
      "name": "Bethany Park",
      "code": "Bethany Park"
     },
     {
      "name": "Bill Harris Iron Horse Park",
      "code": "Bill Harris Iron Horse Park"
     },
     {
      "name": "Bishop Heights Park",
      "code": "Bishop Heights Park"
     },
     {
      "name": "Bison Park",
      "code": "Bison Park"
     },
     {
      "name": "Bobcat Prairie",
      "code": "Bobcat Prairie"
     },
     {
      "name": "Boosalis Park",
      "code": "Boosalis Park"
     },
     {
      "name": "Bowling Lake Park",
      "code": "Bowling Lake Park"
     },
     {
      "name": "Breta Green",
      "code": "Breta Green"
     },
     {
      "name": "Burns Park",
      "code": "Burns Park"
     },
     {
      "name": "Camp-A-Way",
      "code": "Camp-A-Way"
     },
     {
      "name": "Centennial Mall",
      "code": "Centennial Mall"
     },
     {
      "name": "Coddington Park",
      "code": "Coddington Park"
     },
     {
      "name": "Colonial Hills Park",
      "code": "Colonial Hills Park"
     },
     {
      "name": "Cooper Park",
      "code": "Cooper Park"
     },
     {
      "name": "Country View Park",
      "code": "Country View Park"
     },
     {
      "name": "Cripple Creek Park",
      "code": "Cripple Creek Park"
     },
     {
      "name": "Dakota Springs Conservation Area",
      "code": "Dakota Springs Conservation Area"
     },
     {
      "name": "Densmore Park",
      "code": "Densmore Park"
     },
     {
      "name": "Denton Prairie",
      "code": "Denton Prairie"
     },
     {
      "name": "Eagles' View Park",
      "code": "Eagles' View Park"
     },
     {
      "name": "Easterday Park",
      "code": "Easterday Park"
     },
     {
      "name": "ECCO Park",
      "code": "ECCO Park"
     },
     {
      "name": "Eden Park",
      "code": "Eden Park"
     },
     {
      "name": "Edenton South Park",
      "code": "Edenton South Park"
     },
     {
      "name": "F Street Community Center",
      "code": "F Street Community Center"
     },
     {
      "name": "Fallbrook Park",
      "code": "Fallbrook Park"
     },
     {
      "name": "Filbert Park",
      "code": "Filbert Park"
     },
     {
      "name": "Fleming Fields Recreational Sports Park",
      "code": "Fleming Fields Recreational Sports Park"
     },
     {
      "name": "Folsom Park",
      "code": "Folsom Park"
     },
     {
      "name": "Fred Barry Easement",
      "code": "Fred Barry Easement"
     },
     {
      "name": "Glacial Hill Conservation Area",
      "code": "Glacial Hill Conservation Area"
     },
     {
      "name": "Goodhue Mall",
      "code": "Goodhue Mall"
     },
     {
      "name": "Government Square",
      "code": "Government Square"
     },
     {
      "name": "Grand Terrace Park",
      "code": "Grand Terrace Park"
     },
     {
      "name": "Hamann Meadows Conservation Area",
      "code": "Hamann Meadows Conservation Area"
     },
     {
      "name": "Hartland Garden Valley Conservation Area",
      "code": "Hartland Garden Valley Conservation Area"
     },
     {
      "name": "Hartley Park",
      "code": "Hartley Park"
     },
     {
      "name": "Havelock Park",
      "code": "Havelock Park"
     },
     {
      "name": "Hayward Park",
      "code": "Hayward Park"
     },
     {
      "name": "Hazel Abel Park",
      "code": "Hazel Abel Park"
     },
     {
      "name": "Henry Park",
      "code": "Henry Park"
     },
     {
      "name": "Herbert Park",
      "code": "Herbert Park"
     },
     {
      "name": "Highlands Aquatic Center",
      "code": "Highlands Aquatic Center"
     },
     {
      "name": "Highlands Golf Course",
      "code": "Highlands Golf Course"
     },
     {
      "name": "Highlands Park",
      "code": "Highlands Park"
     },
     {
      "name": "Highlands South Park",
      "code": "Highlands South Park"
     },
     {
      "name": "Highway 2 Greenway",
      "code": "Highway 2 Greenway"
     },
     {
      "name": "Holmes Lake Golf Course",
      "code": "Holmes Lake Golf Course"
     },
     {
      "name": "Holmes Lake Park",
      "code": "Holmes Lake Park"
     },
     {
      "name": "Hunter Property",
      "code": "Hunter Property"
     },
     {
      "name": "Huskerville Park",
      "code": "Huskerville Park"
     },
     {
      "name": "Irvingdale Park",
      "code": "Irvingdale Park"
     },
     {
      "name": "Jamaica North Trailhead",
      "code": "Jamaica North Trailhead"
     },
     {
      "name": "Jan Pitsch Green",
      "code": "Jan Pitsch Green"
     },
     {
      "name": "Jayne Snyder Trails Center",
      "code": "Jayne Snyder Trails Center"
     },
     {
      "name": "Jensen Park",
      "code": "Jensen Park"
     },
     {
      "name": "Jim Ager Golf Course",
      "code": "Jim Ager Golf Course"
     },
     {
      "name": "Jonathan Gapp Park",
      "code": "Jonathan Gapp Park"
     },
     {
      "name": "Kahoa Park",
      "code": "Kahoa Park"
     },
     {
      "name": "Keech Park",
      "code": "Keech Park"
     },
     {
      "name": "Kontras Park",
      "code": "Kontras Park"
     },
     {
      "name": "Lakeview Park",
      "code": "Lakeview Park"
     },
     {
      "name": "Larson Park",
      "code": "Larson Park"
     },
     {
      "name": "Lincoln Children's Museum",
      "code": "Lincoln Children's Museum"
     },
     {
      "name": "Lincoln Community Foundation Tower Square",
      "code": "Lincoln Community Foundation Tower Square"
     },
     {
      "name": "Lincoln Mall",
      "code": "Lincoln Mall"
     },
     {
      "name": "Lintel Park",
      "code": "Lintel Park"
     },
     {
      "name": "Mahoney Golf Course",
      "code": "Mahoney Golf Course"
     },
     {
      "name": "Mahoney Park",
      "code": "Mahoney Park"
     },
     {
      "name": "Maple Lodge Park",
      "code": "Maple Lodge Park"
     },
     {
      "name": "Marlene Park",
      "code": "Marlene Park"
     },
     {
      "name": "McAdams Park",
      "code": "McAdams Park"
     },
     {
      "name": "McWilliams Park",
      "code": "McWilliams Park"
     },
     {
      "name": "Mendoza (Phil E) Park",
      "code": "Mendoza (Phil E) Park"
     },
     {
      "name": "Midtown Commons",
      "code": "Midtown Commons"
     },
     {
      "name": "Mopac Trailhead",
      "code": "Mopac Trailhead"
     },
     {
      "name": "Near South Park",
      "code": "Near South Park"
     },
     {
      "name": "Neighbors Park",
      "code": "Neighbors Park"
     },
     {
      "name": "Nevin Park",
      "code": "Nevin Park"
     },
     {
      "name": "Northern Lights Greenway",
      "code": "Northern Lights Greenway"
     },
     {
      "name": "Oak Lake Park",
      "code": "Oak Lake Park"
     },
     {
      "name": "Olympic Heights Park",
      "code": "Olympic Heights Park"
     },
     {
      "name": "Pansing Park",
      "code": "Pansing Park"
     },
     {
      "name": "Peach Park",
      "code": "Peach Park"
     },
     {
      "name": "Pentzer Park",
      "code": "Pentzer Park"
     },
     {
      "name": "Peter Pan Park",
      "code": "Peter Pan Park"
     },
     {
      "name": "Peterson (Erwin) Park",
      "code": "Peterson (Erwin) Park"
     },
     {
      "name": "Phares Park",
      "code": "Phares Park"
     },
     {
      "name": "Piedmont Park",
      "code": "Piedmont Park"
     },
     {
      "name": "Pioneers Golf Course",
      "code": "Pioneers Golf Course"
     },
     {
      "name": "Pioneers Park",
      "code": "Pioneers Park"
     },
     {
      "name": "Pioneers Park Nature Center",
      "code": "Pioneers Park Nature Center"
     },
     {
      "name": "Pocras Park",
      "code": "Pocras Park"
     },
     {
      "name": "Porter (Clare) Park",
      "code": "Porter (Clare) Park"
     },
     {
      "name": "Rickman's Run",
      "code": "Rickman's Run"
     },
     {
      "name": "Roberts Park",
      "code": "Roberts Park"
     },
     {
      "name": "Roper (Max E) East Park",
      "code": "Roper (Max E) East Park"
     },
     {
      "name": "Roper (Max E) West Park",
      "code": "Roper (Max E) West Park"
     },
     {
      "name": "Rudge Park",
      "code": "Rudge Park"
     },
     {
      "name": "Sampson Park",
      "code": "Sampson Park"
     },
     {
      "name": "Sawyer Snell Park",
      "code": "Sawyer Snell Park"
     },
     {
      "name": "Schaefer Tract",
      "code": "Schaefer Tract"
     },
     {
      "name": "Schleich (Steven C) Park",
      "code": "Schleich (Steven C) Park"
     },
     {
      "name": "Schroder Park",
      "code": "Schroder Park"
     },
     {
      "name": "Schwartzkopf Park",
      "code": "Schwartzkopf Park"
     },
     {
      "name": "Seacrest Park",
      "code": "Seacrest Park"
     },
     {
      "name": "Seacrest Range",
      "code": "Seacrest Range"
     },
     {
      "name": "Seng Park at University Place",
      "code": "Seng Park at University Place"
     },
     {
      "name": "Sheridan Green",
      "code": "Sheridan Green"
     },
     {
      "name": "Shoemaker (Frank) Marsh Conservation Area",
      "code": "Shoemaker (Frank) Marsh Conservation Area"
     },
     {
      "name": "Standing Bear Park",
      "code": "Standing Bear Park"
     },
     {
      "name": "Star City Shores Aquatic Center",
      "code": "Star City Shores Aquatic Center"
     },
     {
      "name": "Stevens Creek Park Conservation Area",
      "code": "Stevens Creek Park Conservation Area"
     },
     {
      "name": "Stiefel-Johnson Trailhead",
      "code": "Stiefel-Johnson Trailhead"
     },
     {
      "name": "Stonebridge Park",
      "code": "Stonebridge Park"
     },
     {
      "name": "Stransky Park",
      "code": "Stransky Park"
     },
     {
      "name": "Stuhr Park",
      "code": "Stuhr Park"
     },
     {
      "name": "Sunburst Park",
      "code": "Sunburst Park"
     },
     {
      "name": "Sunken Gardens",
      "code": "Sunken Gardens"
     },
     {
      "name": "Sunrise Park",
      "code": "Sunrise Park"
     },
     {
      "name": "Taylor Park",
      "code": "Taylor Park"
     },
     {
      "name": "Tiedemen Easement",
      "code": "Tiedemen Easement"
     },
     {
      "name": "Tierra Park",
      "code": "Tierra Park"
     },
     {
      "name": "Tierra Williamsburg Playground",
      "code": "Tierra Williamsburg Playground"
     },
     {
      "name": "Timber Valley Park",
      "code": "Timber Valley Park"
     },
     {
      "name": "Touzalin Green",
      "code": "Touzalin Green"
     },
     {
      "name": "Trago Park",
      "code": "Trago Park"
     },
     {
      "name": "Trendwood Park",
      "code": "Trendwood Park"
     },
     {
      "name": "Two Creeks Prairie",
      "code": "Two Creeks Prairie"
     },
     {
      "name": "Tyrrell Park",
      "code": "Tyrrell Park"
     },
     {
      "name": "Union Plaza",
      "code": "Union Plaza"
     },
     {
      "name": "UPCO Park",
      "code": "UPCO Park"
     },
     {
      "name": "Valentino's Idylwild Park",
      "code": "Valentino's Idylwild Park"
     },
     {
      "name": "Van Dorn Park",
      "code": "Van Dorn Park"
     },
     {
      "name": "Vavrina Park",
      "code": "Vavrina Park"
     },
     {
      "name": "Village Meadows Park",
      "code": "Village Meadows Park"
     },
     {
      "name": "Warner Wetlands Conservation Area",
      "code": "Warner Wetlands Conservation Area"
     },
     {
      "name": "West Lincoln Park",
      "code": "West Lincoln Park"
     },
     {
      "name": "Wilderness Park Conservation Area",
      "code": "Wilderness Park Conservation Area"
     },
     {
      "name": "Williamsburg Park",
      "code": "Williamsburg Park"
     },
     {
      "name": "Witherbee Park",
      "code": "Witherbee Park"
     },
     {
      "name": "Woods Park",
      "code": "Woods Park"
     },
     {
      "name": "Woodsdale Green",
      "code": "Woodsdale Green"
     },
     {
      "name": "Trail",
      "code": "Trail"
     }
    ],
    "mergePolicy": "esriMPTDefaultValue",
    "splitPolicy": "esriSPTDefaultValue"
   }
  },
  {
   "name": "Type",
   "type": "esriFieldTypeString",
   "alias": "Type",
   "length": 24,
   "domain": {
    "type": "codedValue",
    "name": "qppParkUnitType",
    "description": "Park Unit Type",
    "codedValues": [
     {
      "name": "Boulevard",
      "code": "Boulevard"
     },
     {
      "name": "Community",
      "code": "Community"
     },
     {
      "name": "Conservancy",
      "code": "Conservancy"
     },
     {
      "name": "Dog Run",
      "code": "Dog Run"
     },
     {
      "name": "Easement",
      "code": "Easement"
     },
     {
      "name": "Golf Course",
      "code": "Golf Course"
     },
     {
      "name": "Leased",
      "code": "Leased"
     },
     {
      "name": "Managed Site",
      "code": "Managed Site"
     },
     {
      "name": "Mini",
      "code": "Mini"
     },
     {
      "name": "Neighborhood",
      "code": "Neighborhood"
     },
     {
      "name": "Pocket",
      "code": "Pocket"
     },
     {
      "name": "Pool",
      "code": "Pool"
     },
     {
      "name": "Public Garden/Plaza",
      "code": "Public Garden/Plaza"
     },
     {
      "name": "Recreation Center",
      "code": "Recreation Center"
     },
     {
      "name": "Regional",
      "code": "Regional"
     },
     {
      "name": "ROW",
      "code": "ROW"
     },
     {
      "name": "Trailhead",
      "code": "Trailhead"
     },
     {
      "name": "Undeveloped",
      "code": "Undeveloped"
     }
    ],
    "mergePolicy": "esriMPTDefaultValue",
    "splitPolicy": "esriSPTDefaultValue"
   }
  },
  {
   "name": "District",
   "type": "esriFieldTypeString",
   "alias": "District",
   "length": 24,
   "domain": {
    "type": "codedValue",
    "name": "qppParkDistrict",
    "description": "Park District",
    "codedValues": [
     {
      "name": "Administration",
      "code": "Administration"
     },
     {
      "name": "Greenways",
      "code": "Greenways"
     },
     {
      "name": "Northeast",
      "code": "Northeast"
     },
     {
      "name": "Northwest",
      "code": "Northwest"
     },
     {
      "name": "Public Gardens",
      "code": "Public Gardens"
     },
     {
      "name": "Southeast",
      "code": "Southeast"
     },
     {
      "name": "Southwest",
      "code": "Southwest"
     }
    ],
    "mergePolicy": "esriMPTDefaultValue",
    "splitPolicy": "esriSPTDefaultValue"
   }
  },
  {
   "name": "IsParkUnit",
   "type": "esriFieldTypeString",
   "alias": "Is Park Unit?",
   "length": 6,
   "domain": {
    "type": "codedValue",
    "name": "YesNo",
    "description": "YesNo",
    "codedValues": [
     {
      "name": "Yes",
      "code": "Yes"
     },
     {
      "name": "No",
      "code": "No"
     }
    ],
    "mergePolicy": "esriMPTDefaultValue",
    "splitPolicy": "esriSPTDefaultValue"
   }
  },
  {
   "name": "IsParkSite",
   "type": "esriFieldTypeString",
   "alias": "Is Park Site?",
   "length": 6,
   "domain": {
    "type": "codedValue",
    "name": "YesNo",
    "description": "YesNo",
    "codedValues": [
     {
      "name": "Yes",
      "code": "Yes"
     },
     {
      "name": "No",
      "code": "No"
     }
    ],
    "mergePolicy": "esriMPTDefaultValue",
    "splitPolicy": "esriSPTDefaultValue"
   }
  },
  {
   "name": "GISViewer",
   "type": "esriFieldTypeString",
   "alias": "On GIS Viewer?",
   "length": 6,
   "domain": {
    "type": "codedValue",
    "name": "YesNo",
    "description": "YesNo",
    "codedValues": [
     {
      "name": "Yes",
      "code": "Yes"
     },
     {
      "name": "No",
      "code": "No"
     }
    ],
    "mergePolicy": "esriMPTDefaultValue",
    "splitPolicy": "esriSPTDefaultValue"
   }
  },
  {
   "name": "IsNamePermanent",
   "type": "esriFieldTypeString",
   "alias": "Is Name Permanent?",
   "length": 6,
   "domain": {
    "type": "codedValue",
    "name": "YesNo",
    "description": "YesNo",
    "codedValues": [
     {
      "name": "Yes",
      "code": "Yes"
     },
     {
      "name": "No",
      "code": "No"
     }
    ],
    "mergePolicy": "esriMPTDefaultValue",
    "splitPolicy": "esriSPTDefaultValue"
   }
  },
  {
   "name": "WorkingName",
   "type": "esriFieldTypeString",
   "alias": "Working Name",
   "length": 72,
   "domain": null
  },
  {
   "name": "ReferenceID",
   "type": "esriFieldTypeString",
   "alias": "Reference ID",
   "length": 24,
   "domain": null
  },
  {
   "name": "Address",
   "type": "esriFieldTypeString",
   "alias": "Address",
   "length": 72,
   "domain": null
  },
  {
   "name": "YearAcquired",
   "type": "esriFieldTypeString",
   "alias": "Year Acquired",
   "length": 10,
   "domain": null
  },
  {
   "name": "YearAcquiredNotes",
   "type": "esriFieldTypeString",
   "alias": "Year Acquired Notes",
   "length": 50,
   "domain": null
  },
  {
   "name": "Acres",
   "type": "esriFieldTypeDouble",
   "alias": "Acres",
   "domain": null
  },
  {
   "name": "Owner",
   "type": "esriFieldTypeString",
   "alias": "Owner",
   "length": 24,
   "domain": {
    "type": "codedValue",
    "name": "qppOwnerMaintainedBy",
    "description": "Owner or Maintained By",
    "codedValues": [
     {
      "name": "City of Lincoln",
      "code": "City of Lincoln"
     },
     {
      "name": "City of Lincoln - NRD",
      "code": "City of Lincoln - NRD"
     },
     {
      "name": "Airport Authority",
      "code": "Airport Authority"
     },
     {
      "name": "DLA",
      "code": "DLA"
     },
     {
      "name": "HOA",
      "code": "HOA"
     },
     {
      "name": "LCZ",
      "code": "LCZ"
     },
     {
      "name": "LPS",
      "code": "LPS"
     },
     {
      "name": "NAS",
      "code": "NAS"
     },
     {
      "name": "NRD",
      "code": "NRD"
     },
     {
      "name": "Other",
      "code": "Other"
     }
    ],
    "mergePolicy": "esriMPTDefaultValue",
    "splitPolicy": "esriSPTDefaultValue"
   }
  },
  {
   "name": "MaintainedBy",
   "type": "esriFieldTypeString",
   "alias": "MaintainedBy",
   "length": 24,
   "domain": {
    "type": "codedValue",
    "name": "qppOwnerMaintainedBy",
    "description": "Owner or Maintained By",
    "codedValues": [
     {
      "name": "City of Lincoln",
      "code": "City of Lincoln"
     },
     {
      "name": "City of Lincoln - NRD",
      "code": "City of Lincoln - NRD"
     },
     {
      "name": "Airport Authority",
      "code": "Airport Authority"
     },
     {
      "name": "DLA",
      "code": "DLA"
     },
     {
      "name": "HOA",
      "code": "HOA"
     },
     {
      "name": "LCZ",
      "code": "LCZ"
     },
     {
      "name": "LPS",
      "code": "LPS"
     },
     {
      "name": "NAS",
      "code": "NAS"
     },
     {
      "name": "NRD",
      "code": "NRD"
     },
     {
      "name": "Other",
      "code": "Other"
     }
    ],
    "mergePolicy": "esriMPTDefaultValue",
    "splitPolicy": "esriSPTDefaultValue"
   }
  },
  {
   "name": "LCode",
   "type": "esriFieldTypeString",
   "alias": "Location Code",
   "length": 60,
   "domain": {
    "type": "codedValue",
    "name": "qppLDesCode",
    "description": "Location Description Code",
    "codedValues": [
     {
      "name": "14th Street Trail  - 09612",
      "code": "14th Street Trail  - 09612"
     },
     {
      "name": "1660 House   - 09095",
      "code": "1660 House   - 09095"
     },
     {
      "name": "1st Street Trail - 09611",
      "code": "1st Street Trail - 09611"
     },
     {
      "name": "27th Street Mini Park - 09094",
      "code": "27th Street Mini Park - 09094"
     },
     {
      "name": "30-32nd, A-Neighbors - PW - 09103",
      "code": "30-32nd, A-Neighbors - PW - 09103"
     },
     {
      "name": "34th & Madison Park - 09134",
      "code": "34th & Madison Park - 09134"
     },
     {
      "name": "3rd & \"A\" Overpass - 09321",
      "code": "3rd & \"A\" Overpass - 09321"
     },
     {
      "name": "3rd & \"F\" Underpass - 09322",
      "code": "3rd & \"F\" Underpass - 09322"
     },
     {
      "name": "3rd Street Corridor - 09323",
      "code": "3rd Street Corridor - 09323"
     },
     {
      "name": "40th/Highway 2 Park - 09200",
      "code": "40th/Highway 2 Park - 09200"
     },
     {
      "name": "45th Gladstone Plygrnd. - 09135",
      "code": "45th Gladstone Plygrnd. - 09135"
     },
     {
      "name": "48th Adams Park - 09133",
      "code": "48th Adams Park - 09133"
     },
     {
      "name": "52nd/Roose Park - 09201",
      "code": "52nd/Roose Park - 09201"
     },
     {
      "name": "56th & Van Dorn - PW - 09208",
      "code": "56th & Van Dorn - PW - 09208"
     },
     {
      "name": "6th & \"G\" Storage - 09096",
      "code": "6th & \"G\" Storage - 09096"
     },
     {
      "name": "70th St. Trail - 09214",
      "code": "70th St. Trail - 09214"
     },
     {
      "name": "84/MOPAC Trailhead - 09215",
      "code": "84/MOPAC Trailhead - 09215"
     },
     {
      "name": "84th Street Trail - 09449",
      "code": "84th Street Trail - 09449"
     },
     {
      "name": "Ager Golf Course - 09015",
      "code": "Ager Golf Course - 09015"
     },
     {
      "name": "Air Park Recreation Center - 09030",
      "code": "Air Park Recreation Center - 09030"
     },
     {
      "name": "Air Park Storage - 09145",
      "code": "Air Park Storage - 09145"
     },
     {
      "name": "Airport Entry Corridor  - 09635",
      "code": "Airport Entry Corridor  - 09635"
     },
     {
      "name": "Alvo Road Trail - 09590",
      "code": "Alvo Road Trail - 09590"
     },
     {
      "name": "American Legion Park - 09051",
      "code": "American Legion Park - 09051"
     },
     {
      "name": "Animal Hosp/Shelter - 09220",
      "code": "Animal Hosp/Shelter - 09220"
     },
     {
      "name": "Antelope Bandshell - 09056",
      "code": "Antelope Bandshell - 09056"
     },
     {
      "name": "Antelope Enclosed Shelter - 09054",
      "code": "Antelope Enclosed Shelter - 09054"
     },
     {
      "name": "Antelope Park North - 09052",
      "code": "Antelope Park North - 09052"
     },
     {
      "name": "Antelope Park South - 09053",
      "code": "Antelope Park South - 09053"
     },
     {
      "name": "Antelope Triangle - 09101",
      "code": "Antelope Triangle - 09101"
     },
     {
      "name": "Antelope Valley - 09551",
      "code": "Antelope Valley - 09551"
     },
     {
      "name": "Arbor Lake - 09571",
      "code": "Arbor Lake - 09571"
     },
     {
      "name": "Arkfeld Field - 09146",
      "code": "Arkfeld Field - 09146"
     },
     {
      "name": "Arnold CLC - 09644",
      "code": "Arnold CLC - 09644"
     },
     {
      "name": "Arnold Heights Park - 09147",
      "code": "Arnold Heights Park - 09147"
     },
     {
      "name": "Arnold Heights Pool - 09019",
      "code": "Arnold Heights Pool - 09019"
     },
     {
      "name": "Ashley Heights Mini Park - 09558",
      "code": "Ashley Heights Mini Park - 09558"
     },
     {
      "name": "Assurity Outdoor Classroom - 09100",
      "code": "Assurity Outdoor Classroom - 09100"
     },
     {
      "name": "Aster Mini Park - 09556",
      "code": "Aster Mini Park - 09556"
     },
     {
      "name": "Auld Pavilion - 09031",
      "code": "Auld Pavilion - 09031"
     },
     {
      "name": "Austin Property - 09800",
      "code": "Austin Property - 09800"
     },
     {
      "name": "Ballard Ballfield - 09109",
      "code": "Ballard Ballfield - 09109"
     },
     {
      "name": "Ballard Concession - 09110",
      "code": "Ballard Concession - 09110"
     },
     {
      "name": "Ballard Park - 09111",
      "code": "Ballard Park - 09111"
     },
     {
      "name": "Ballard Pool - 09020",
      "code": "Ballard Pool - 09020"
     },
     {
      "name": "Bea Richmond Park - 09151",
      "code": "Bea Richmond Park - 09151"
     },
     {
      "name": "Belmont CLC - 09585",
      "code": "Belmont CLC - 09585"
     },
     {
      "name": "Belmont Park - 09148",
      "code": "Belmont Park - 09148"
     },
     {
      "name": "Belmont Pool - 09021",
      "code": "Belmont Pool - 09021"
     },
     {
      "name": "Belmont Recreation Center - 09032",
      "code": "Belmont Recreation Center - 09032"
     },
     {
      "name": "Bethany Enclosed Shelter - 09113",
      "code": "Bethany Enclosed Shelter - 09113"
     },
     {
      "name": "Bethany Park - 09112",
      "code": "Bethany Park - 09112"
     },
     {
      "name": "Billy Wolff Trail - 09210",
      "code": "Billy Wolff Trail - 09210"
     },
     {
      "name": "Bishop Hts. Park - 09202",
      "code": "Bishop Hts. Park - 09202"
     },
     {
      "name": "Bison Park - 09539",
      "code": "Bison Park - 09539"
     },
     {
      "name": "Bison Trail - 09455",
      "code": "Bison Trail - 09455"
     },
     {
      "name": "Boosalis Park - 09114",
      "code": "Boosalis Park - 09114"
     },
     {
      "name": "Boosalis Trail - 09216",
      "code": "Boosalis Trail - 09216"
     },
     {
      "name": "Bowling Lake Park - 09149",
      "code": "Bowling Lake Park - 09149"
     },
     {
      "name": "Breta Park - 09097",
      "code": "Breta Park - 09097"
     },
     {
      "name": "Burns Park - 09532",
      "code": "Burns Park - 09532"
     },
     {
      "name": "Calvert CLC - 09595",
      "code": "Calvert CLC - 09595"
     },
     {
      "name": "Calvert Recreation Center - 09033",
      "code": "Calvert Recreation Center - 09033"
     },
     {
      "name": "Campbells Bed - 09104",
      "code": "Campbells Bed - 09104"
     },
     {
      "name": "Carpentry/Heavy Equipment Shop - 09106",
      "code": "Carpentry/Heavy Equipment Shop - 09106"
     },
     {
      "name": "Cascade Fountain - 09058",
      "code": "Cascade Fountain - 09058"
     },
     {
      "name": "Cavett Connector - 09573",
      "code": "Cavett Connector - 09573"
     },
     {
      "name": "Centennial Mall - 09059",
      "code": "Centennial Mall - 09059"
     },
     {
      "name": "Central Business District - 09057",
      "code": "Central Business District - 09057"
     },
     {
      "name": "Children's Museum - 09480",
      "code": "Children's Museum - 09480"
     },
     {
      "name": "Civil Defense Building - 09069",
      "code": "Civil Defense Building - 09069"
     },
     {
      "name": "Coddington Park - 09221",
      "code": "Coddington Park - 09221"
     },
     {
      "name": "Colonial Hills Park - 09173",
      "code": "Colonial Hills Park - 09173"
     },
     {
      "name": "Cooper Ballfield - 09063",
      "code": "Cooper Ballfield - 09063"
     },
     {
      "name": "Cooper Park - 09064",
      "code": "Cooper Park - 09064"
     },
     {
      "name": "Country View Park - 09494",
      "code": "Country View Park - 09494"
     },
     {
      "name": "County Club Medians  - 09623",
      "code": "County Club Medians  - 09623"
     },
     {
      "name": "Cripple Creek Park - 09174",
      "code": "Cripple Creek Park - 09174"
     },
     {
      "name": "Densmore Baseball Fields - 09602",
      "code": "Densmore Baseball Fields - 09602"
     },
     {
      "name": "Densmore Park - 09233",
      "code": "Densmore Park - 09233"
     },
     {
      "name": "Densmore Soccer Fields - 09576",
      "code": "Densmore Soccer Fields - 09576"
     },
     {
      "name": "Densmore Softball Fields - 09603",
      "code": "Densmore Softball Fields - 09603"
     },
     {
      "name": "Densmore Trail - 09546",
      "code": "Densmore Trail - 09546"
     },
     {
      "name": "Dietrich Trail - 09138",
      "code": "Dietrich Trail - 09138"
     },
     {
      "name": "Eagles View Mini Park - 09524",
      "code": "Eagles View Mini Park - 09524"
     },
     {
      "name": "Easterday Park - 09458",
      "code": "Easterday Park - 09458"
     },
     {
      "name": "Easterday Recreation Center - 09034",
      "code": "Easterday Recreation Center - 09034"
     },
     {
      "name": "ECCO Park - 09115",
      "code": "ECCO Park - 09115"
     },
     {
      "name": "Eden Park - 09175",
      "code": "Eden Park - 09175"
     },
     {
      "name": "Eden Pool - 09022",
      "code": "Eden Pool - 09022"
     },
     {
      "name": "Edenton South Park - 09438",
      "code": "Edenton South Park - 09438"
     },
     {
      "name": "Eiseley Library - 09614",
      "code": "Eiseley Library - 09614"
     },
     {
      "name": "Elaine Hammer Bridge - 09593",
      "code": "Elaine Hammer Bridge - 09593"
     },
     {
      "name": "Elks Ballfield - 09065",
      "code": "Elks Ballfield - 09065"
     },
     {
      "name": "Everett CLC - 09522",
      "code": "Everett CLC - 09522"
     },
     {
      "name": "F Street Recreation Center - 09035",
      "code": "F Street Recreation Center - 09035"
     },
     {
      "name": "Fallbrook Park - 09598",
      "code": "Fallbrook Park - 09598"
     },
     {
      "name": "Fallbrook Trail - 09594",
      "code": "Fallbrook Trail - 09594"
     },
     {
      "name": "Filbert Park - 09234",
      "code": "Filbert Park - 09234"
     },
     {
      "name": "Fire Ridge Parcel - 09577",
      "code": "Fire Ridge Parcel - 09577"
     },
     {
      "name": "Fleming Fields - 09136",
      "code": "Fleming Fields - 09136"
     },
     {
      "name": "Folsom Park - 09583",
      "code": "Folsom Park - 09583"
     },
     {
      "name": "Forestry Shop - 09108",
      "code": "Forestry Shop - 09108"
     },
     {
      "name": "Gapp Property - 09587",
      "code": "Gapp Property - 09587"
     },
     {
      "name": "Goodhue Mall - 09060",
      "code": "Goodhue Mall - 09060"
     },
     {
      "name": "Goodrich CLC - 09609",
      "code": "Goodrich CLC - 09609"
     },
     {
      "name": "Gov't. Square @ 10th & \"O\" - 09545",
      "code": "Gov't. Square @ 10th & \"O\" - 09545"
     },
     {
      "name": "Grand Terrace Park - 09605",
      "code": "Grand Terrace Park - 09605"
     },
     {
      "name": "Greenways Shop  - 09630",
      "code": "Greenways Shop  - 09630"
     },
     {
      "name": "Hamann Meadows - 09588",
      "code": "Hamann Meadows - 09588"
     },
     {
      "name": "Hamann Rose Garden - 09055",
      "code": "Hamann Rose Garden - 09055"
     },
     {
      "name": "Hartland's Garden Valley - 09578",
      "code": "Hartland's Garden Valley - 09578"
     },
     {
      "name": "Hartley Park - 09498",
      "code": "Hartley Park - 09498"
     },
     {
      "name": "Havelock Park - 09116",
      "code": "Havelock Park - 09116"
     },
     {
      "name": "Haymarket Arena Grounds - 09600",
      "code": "Haymarket Arena Grounds - 09600"
     },
     {
      "name": "Haymarket Bridge/Trail - 09527",
      "code": "Haymarket Bridge/Trail - 09527"
     },
     {
      "name": "Haymarket Park - 09497",
      "code": "Haymarket Park - 09497"
     },
     {
      "name": "Hayward Park - 09152",
      "code": "Hayward Park - 09152"
     },
     {
      "name": "Hazel Abel Park - 09066",
      "code": "Hazel Abel Park - 09066"
     },
     {
      "name": "Henry Park - 09177",
      "code": "Henry Park - 09177"
     },
     {
      "name": "HenryS.Prescott, Pond-PW - 09207",
      "code": "HenryS.Prescott, Pond-PW - 09207"
     },
     {
      "name": "Herbert Park - 09117",
      "code": "Herbert Park - 09117"
     },
     {
      "name": "Highlands Golf Course - 09017",
      "code": "Highlands Golf Course - 09017"
     },
     {
      "name": "Highlands Park - 09153",
      "code": "Highlands Park - 09153"
     },
     {
      "name": "Highlands Park South - 09257",
      "code": "Highlands Park South - 09257"
     },
     {
      "name": "Highlands Pool - 09448",
      "code": "Highlands Pool - 09448"
     },
     {
      "name": "Highlands Trail - 09479",
      "code": "Highlands Trail - 09479"
     },
     {
      "name": "Hollingsworth Property - 09586",
      "code": "Hollingsworth Property - 09586"
     },
     {
      "name": "Holmes Ballfield - 09178",
      "code": "Holmes Ballfield - 09178"
     },
     {
      "name": "Holmes Ballfield Storage - 09179",
      "code": "Holmes Ballfield Storage - 09179"
     },
     {
      "name": "Holmes Dam Area - 09180",
      "code": "Holmes Dam Area - 09180"
     },
     {
      "name": "Holmes Golf Course - 09014",
      "code": "Holmes Golf Course - 09014"
     },
     {
      "name": "Holmes Park - 09182",
      "code": "Holmes Park - 09182"
     },
     {
      "name": "Holmes Rickman's Dog Run - 09181",
      "code": "Holmes Rickman's Dog Run - 09181"
     },
     {
      "name": "Horticulture Shop - 09061",
      "code": "Horticulture Shop - 09061"
     },
     {
      "name": "Humane Society Fountain - 09628",
      "code": "Humane Society Fountain - 09628"
     },
     {
      "name": "Hyde Observatory - 09186",
      "code": "Hyde Observatory - 09186"
     },
     {
      "name": "Idylwild Park - 09118",
      "code": "Idylwild Park - 09118"
     },
     {
      "name": "Iron Horse Park - 09067",
      "code": "Iron Horse Park - 09067"
     },
     {
      "name": "Irving Recreation Center - 09037",
      "code": "Irving Recreation Center - 09037"
     },
     {
      "name": "Irvingdale Park - 09068",
      "code": "Irvingdale Park - 09068"
     },
     {
      "name": "Irvingdale Pool - 09023",
      "code": "Irvingdale Pool - 09023"
     },
     {
      "name": "Jamaica North Trail - 09528",
      "code": "Jamaica North Trail - 09528"
     },
     {
      "name": "Jan Pitsch Green - 09601",
      "code": "Jan Pitsch Green - 09601"
     },
     {
      "name": "Jayne Snyder Trail Center - 09610",
      "code": "Jayne Snyder Trail Center - 09610"
     },
     {
      "name": "Jensen Park - 09206",
      "code": "Jensen Park - 09206"
     },
     {
      "name": "JPA Arena Ground - 09626",
      "code": "JPA Arena Ground - 09626"
     },
     {
      "name": "Kahoa Park - 09119",
      "code": "Kahoa Park - 09119"
     },
     {
      "name": "Keech Park - 09453",
      "code": "Keech Park - 09453"
     },
     {
      "name": "King Wetland - 09552",
      "code": "King Wetland - 09552"
     },
     {
      "name": "Kontras Park - 09189",
      "code": "Kontras Park - 09189"
     },
     {
      "name": "Kooser Elementary - 09642",
      "code": "Kooser Elementary - 09642"
     },
     {
      "name": "Lakeview Park - 09165",
      "code": "Lakeview Park - 09165"
     },
     {
      "name": "Landmark-Fletcher Trail - 09604",
      "code": "Landmark-Fletcher Trail - 09604"
     },
     {
      "name": "Larson Park - 09184",
      "code": "Larson Park - 09184"
     },
     {
      "name": "Lewis Ballfield - 09070",
      "code": "Lewis Ballfield - 09070"
     },
     {
      "name": "Lewis Concession - 09071",
      "code": "Lewis Concession - 09071"
     },
     {
      "name": "Lincoln Mall - 09085",
      "code": "Lincoln Mall - 09085"
     },
     {
      "name": "Lintel Park - 09258",
      "code": "Lintel Park - 09258"
     },
     {
      "name": "London Road/56 Park - 09185",
      "code": "London Road/56 Park - 09185"
     },
     {
      "name": "Mahoney Ballfields - 09120",
      "code": "Mahoney Ballfields - 09120"
     },
     {
      "name": "Mahoney Concession - 09121",
      "code": "Mahoney Concession - 09121"
     },
     {
      "name": "Mahoney Dog Run - 09636",
      "code": "Mahoney Dog Run - 09636"
     },
     {
      "name": "Mahoney Golf Course - 09016",
      "code": "Mahoney Golf Course - 09016"
     },
     {
      "name": "Mahoney Park - 09122",
      "code": "Mahoney Park - 09122"
     },
     {
      "name": "Maple Lodge Park - 09073",
      "code": "Maple Lodge Park - 09073"
     },
     {
      "name": "Marlene Mini Park - 09488",
      "code": "Marlene Mini Park - 09488"
     },
     {
      "name": "McAdams Park - 09512",
      "code": "McAdams Park - 09512"
     },
     {
      "name": "McPhee CLC - 09554",
      "code": "McPhee CLC - 09554"
     },
     {
      "name": "McWilliams Park - 09155",
      "code": "McWilliams Park - 09155"
     },
     {
      "name": "Mechanical Maintenance Shop - 09107",
      "code": "Mechanical Maintenance Shop - 09107"
     },
     {
      "name": "Mendoza Park - 09531",
      "code": "Mendoza Park - 09531"
     },
     {
      "name": "Mid Town - 09572",
      "code": "Mid Town - 09572"
     },
     {
      "name": "MOPAC Trail - 09140",
      "code": "MOPAC Trail - 09140"
     },
     {
      "name": "Muny Building - 09086",
      "code": "Muny Building - 09086"
     },
     {
      "name": "Murdock Trail - 09143",
      "code": "Murdock Trail - 09143"
     },
     {
      "name": "N St Protected Bikeway - 09629",
      "code": "N St Protected Bikeway - 09629"
     },
     {
      "name": "Near South Park - 09496",
      "code": "Near South Park - 09496"
     },
     {
      "name": "Neighbors Park - 09075",
      "code": "Neighbors Park - 09075"
     },
     {
      "name": "Nevin Park - 09123",
      "code": "Nevin Park - 09123"
     },
     {
      "name": "North Bottoms Sign - 09563",
      "code": "North Bottoms Sign - 09563"
     },
     {
      "name": "North of Garfield to \"A\" - PW - 09102",
      "code": "North of Garfield to \"A\" - PW - 09102"
     },
     {
      "name": "Northeast Business District - 09124",
      "code": "Northeast Business District - 09124"
     },
     {
      "name": "Northeast Dist. Shop/Chemical Bldg. - 09126",
      "code": "Northeast Dist. Shop/Chemical Bldg. - 09126"
     },
     {
      "name": "Northeast District Islands - 09125",
      "code": "Northeast District Islands - 09125"
     },
     {
      "name": "Northern Lights - 09553",
      "code": "Northern Lights - 09553"
     },
     {
      "name": "Northwest District Islands - 09158",
      "code": "Northwest District Islands - 09158"
     },
     {
      "name": "Northwest District Shop - 09159",
      "code": "Northwest District Shop - 09159"
     },
     {
      "name": "Northwest Storage Building - 09160",
      "code": "Northwest Storage Building - 09160"
     },
     {
      "name": "Nothwest Double Garage - 09157",
      "code": "Nothwest Double Garage - 09157"
     },
     {
      "name": "Nursery - 09235",
      "code": "Nursery - 09235"
     },
     {
      "name": "NW 48th St Trail - 09646",
      "code": "NW 48th St Trail - 09646"
     },
     {
      "name": "NW 56th St Trail - 09613",
      "code": "NW 56th St Trail - 09613"
     },
     {
      "name": "Oak Creek Dog Run - 09156",
      "code": "Oak Creek Dog Run - 09156"
     },
     {
      "name": "Oak Lake Park - 09161",
      "code": "Oak Lake Park - 09161"
     },
     {
      "name": "Old Cheney Trail  - 09217",
      "code": "Old Cheney Trail  - 09217"
     },
     {
      "name": "Olympic Heights Park - 09163",
      "code": "Olympic Heights Park - 09163"
     },
     {
      "name": "Pansing Park - 09187",
      "code": "Pansing Park - 09187"
     },
     {
      "name": "Parks & Rec Headquarters, 32nd & O St - 09634",
      "code": "Parks & Rec Headquarters, 32nd & O St - 09634"
     },
     {
      "name": "Peach Park - 09076",
      "code": "Peach Park - 09076"
     },
     {
      "name": "Pentzer Park - 09164",
      "code": "Pentzer Park - 09164"
     },
     {
      "name": "Pershing Auditorium - 09077",
      "code": "Pershing Auditorium - 09077"
     },
     {
      "name": "Peter Pan Park - 09127",
      "code": "Peter Pan Park - 09127"
     },
     {
      "name": "Peterson Dog Run (AKA Stransky Dog Run) - 09637",
      "code": "Peterson Dog Run (AKA Stransky Dog Run) - 09637"
     },
     {
      "name": "Peterson Park - 09236",
      "code": "Peterson Park - 09236"
     },
     {
      "name": "Phares Park - 09457",
      "code": "Phares Park - 09457"
     },
     {
      "name": "Piedmont Park - 09188",
      "code": "Piedmont Park - 09188"
     },
     {
      "name": "Pierson/33rd Perennial Beds - 09098",
      "code": "Pierson/33rd Perennial Beds - 09098"
     },
     {
      "name": "Pine Lake Park - 09190",
      "code": "Pine Lake Park - 09190"
     },
     {
      "name": "Pinewood Bowl - 09222",
      "code": "Pinewood Bowl - 09222"
     },
     {
      "name": "Pioneers Golf Course - 09013",
      "code": "Pioneers Golf Course - 09013"
     },
     {
      "name": "Pioneers N. Gate Res.-PW - 09243",
      "code": "Pioneers N. Gate Res.-PW - 09243"
     },
     {
      "name": "Pioneers Park - 09224",
      "code": "Pioneers Park - 09224"
     },
     {
      "name": "Pocras Park - 09078",
      "code": "Pocras Park - 09078"
     },
     {
      "name": "Porter Park - 09451",
      "code": "Porter Park - 09451"
     },
     {
      "name": "PPNC Grnds/Bldg. - 09223",
      "code": "PPNC Grnds/Bldg. - 09223"
     },
     {
      "name": "Prairie Cooridor - 09627",
      "code": "Prairie Cooridor - 09627"
     },
     {
      "name": "Public Garden Maint Facility  - 09620",
      "code": "Public Garden Maint Facility  - 09620"
     },
     {
      "name": "Put The Beds to Bed - 09566",
      "code": "Put The Beds to Bed - 09566"
     },
     {
      "name": "Roberts Park - 09191",
      "code": "Roberts Park - 09191"
     },
     {
      "name": "Roca Berry Farm - 09525",
      "code": "Roca Berry Farm - 09525"
     },
     {
      "name": "Rock Island Trail - 09212",
      "code": "Rock Island Trail - 09212"
     },
     {
      "name": "Roper Dog Run - 09638",
      "code": "Roper Dog Run - 09638"
     },
     {
      "name": "Roper Park - 09154",
      "code": "Roper Park - 09154"
     },
     {
      "name": "Rose Pruning Demonstration - 09567",
      "code": "Rose Pruning Demonstration - 09567"
     },
     {
      "name": "Rotary Garden - 09099",
      "code": "Rotary Garden - 09099"
     },
     {
      "name": "Rudge Memorial Park - 09079",
      "code": "Rudge Memorial Park - 09079"
     },
     {
      "name": "Salt Creek Levee Trail - 09244",
      "code": "Salt Creek Levee Trail - 09244"
     },
     {
      "name": "Sawyer Ballfield - 09080",
      "code": "Sawyer Ballfield - 09080"
     },
     {
      "name": "Sawyer Snell Park - 09081",
      "code": "Sawyer Snell Park - 09081"
     },
     {
      "name": "Schleich Park - 09514",
      "code": "Schleich Park - 09514"
     },
     {
      "name": "Schroeder/Willard Park - 09226",
      "code": "Schroeder/Willard Park - 09226"
     },
     {
      "name": "Schwartzkopf Park - 09082",
      "code": "Schwartzkopf Park - 09082"
     },
     {
      "name": "Seacrest Park - 09192",
      "code": "Seacrest Park - 09192"
     },
     {
      "name": "Seacrest Range - 09227",
      "code": "Seacrest Range - 09227"
     },
     {
      "name": "Sherman Concession - 09083",
      "code": "Sherman Concession - 09083"
     },
     {
      "name": "Sherman Field - 09084",
      "code": "Sherman Field - 09084"
     },
     {
      "name": "Shoemaker Marsh - 09540",
      "code": "Shoemaker Marsh - 09540"
     },
     {
      "name": "South Ridge Trail  - 09218",
      "code": "South Ridge Trail  - 09218"
     },
     {
      "name": "Southeast Business District - 09193",
      "code": "Southeast Business District - 09193"
     },
     {
      "name": "Southeast Distict Islands - 09194",
      "code": "Southeast Distict Islands - 09194"
     },
     {
      "name": "Southeast Distict Shop - 09195",
      "code": "Southeast Distict Shop - 09195"
     },
     {
      "name": "Southwest Village Heights Neighborhood - 09643",
      "code": "Southwest Village Heights Neighborhood - 09643"
     },
     {
      "name": "Standing Bear Park - 09493",
      "code": "Standing Bear Park - 09493"
     },
     {
      "name": "Star City Shores - 09026",
      "code": "Star City Shores - 09026"
     },
     {
      "name": "Stent Property - 09801",
      "code": "Stent Property - 09801"
     },
     {
      "name": "Stevens Creek Park  - 09624",
      "code": "Stevens Creek Park  - 09624"
     },
     {
      "name": "Stiefel Property  - 09802",
      "code": "Stiefel Property  - 09802"
     },
     {
      "name": "Stonebridge Park - 09568",
      "code": "Stonebridge Park - 09568"
     },
     {
      "name": "Stonebridge Trail - 09641",
      "code": "Stonebridge Trail - 09641"
     },
     {
      "name": "Stransky Park - 09251",
      "code": "Stransky Park - 09251"
     },
     {
      "name": "Stransky Park  - 09631",
      "code": "Stransky Park  - 09631"
     },
     {
      "name": "Stuhr Park - 09196",
      "code": "Stuhr Park - 09196"
     },
     {
      "name": "Sunburst Park - 09197",
      "code": "Sunburst Park - 09197"
     },
     {
      "name": "Sunken Gardens - 09087",
      "code": "Sunken Gardens - 09087"
     },
     {
      "name": "Sunrise Park - 09128",
      "code": "Sunrise Park - 09128"
     },
     {
      "name": "Superior Street Trail  - 09171",
      "code": "Superior Street Trail  - 09171"
     },
     {
      "name": "SW Dist. Islands - 09228",
      "code": "SW Dist. Islands - 09228"
     },
     {
      "name": "SW Dist. Shop  - 09231",
      "code": "SW Dist. Shop  - 09231"
     },
     {
      "name": "Taylor Park - 09198",
      "code": "Taylor Park - 09198"
     },
     {
      "name": "Tierra/Briarhurst Park - 09204",
      "code": "Tierra/Briarhurst Park - 09204"
     },
     {
      "name": "Timber Valley - 09621",
      "code": "Timber Valley - 09621"
     },
     {
      "name": "Tower Square - 09608",
      "code": "Tower Square - 09608"
     },
     {
      "name": "Trago Park - 09166",
      "code": "Trago Park - 09166"
     },
     {
      "name": "Trago Sprayground - 09581",
      "code": "Trago Sprayground - 09581"
     },
     {
      "name": "Trendwood Park - 09199",
      "code": "Trendwood Park - 09199"
     },
     {
      "name": "Tyrrell Park - 09129",
      "code": "Tyrrell Park - 09129"
     },
     {
      "name": "Uni Ballfields - 09130",
      "code": "Uni Ballfields - 09130"
     },
     {
      "name": "Uni Place Park - 09131",
      "code": "Uni Place Park - 09131"
     },
     {
      "name": "Union Plaza (Inc. Jayne Snyder Trail) - 09582",
      "code": "Union Plaza (Inc. Jayne Snyder Trail) - 09582"
     },
     {
      "name": "University Place Pool - 09027",
      "code": "University Place Pool - 09027"
     },
     {
      "name": "UPCO Park - 09132",
      "code": "UPCO Park - 09132"
     },
     {
      "name": "Van Dorn Encl.Shelter - 09240",
      "code": "Van Dorn Encl.Shelter - 09240"
     },
     {
      "name": "Van Dorn Park - 09239",
      "code": "Van Dorn Park - 09239"
     },
     {
      "name": "Van Dorn Storage Bldg. - 09238",
      "code": "Van Dorn Storage Bldg. - 09238"
     },
     {
      "name": "Vavrina Meadows  - 09489",
      "code": "Vavrina Meadows  - 09489"
     },
     {
      "name": "Veterans Memorial Gardens - 09088",
      "code": "Veterans Memorial Gardens - 09088"
     },
     {
      "name": "Vine Street Trail - 09142",
      "code": "Vine Street Trail - 09142"
     },
     {
      "name": "Wake Up The Beds - 09565",
      "code": "Wake Up The Beds - 09565"
     },
     {
      "name": "Walt Library - 09615",
      "code": "Walt Library - 09615"
     },
     {
      "name": "Warner Wetlands - 09520",
      "code": "Warner Wetlands - 09520"
     },
     {
      "name": "Water Department Yards - 09089",
      "code": "Water Department Yards - 09089"
     },
     {
      "name": "Waterford Park - 09599",
      "code": "Waterford Park - 09599"
     },
     {
      "name": "West \"O\" Trail - 09172",
      "code": "West \"O\" Trail - 09172"
     },
     {
      "name": "West Lincoln Park - 09168",
      "code": "West Lincoln Park - 09168"
     },
     {
      "name": "Wilderness Park - 09241",
      "code": "Wilderness Park - 09241"
     },
     {
      "name": "Wilderness Pk Storage Facility (surplus items) - 09619",
      "code": "Wilderness Pk Storage Facility (surplus items) - 09619"
     },
     {
      "name": "Wilderness Resource Management - 09482",
      "code": "Wilderness Resource Management - 09482"
     },
     {
      "name": "Williamsburg Park - 09205",
      "code": "Williamsburg Park - 09205"
     },
     {
      "name": "Williamsburg Trail - 09219",
      "code": "Williamsburg Trail - 09219"
     },
     {
      "name": "Witherbee Park - 09580",
      "code": "Witherbee Park - 09580"
     },
     {
      "name": "Woods Concession - 09091",
      "code": "Woods Concession - 09091"
     },
     {
      "name": "Woods Park - 09092",
      "code": "Woods Park - 09092"
     },
     {
      "name": "Woods Park Tennis  - 09618",
      "code": "Woods Park Tennis  - 09618"
     },
     {
      "name": "Woods Pool - 09028",
      "code": "Woods Pool - 09028"
     },
     {
      "name": "Woods/Kawanis Ballfield - 09090",
      "code": "Woods/Kawanis Ballfield - 09090"
     },
     {
      "name": "Zoo Parking Lot - 09062",
      "code": "Zoo Parking Lot - 09062"
     },
     {
      "name": "?",
      "code": "?"
     },
     {
      "name": "NA",
      "code": "NA"
     }
    ],
    "mergePolicy": "esriMPTDefaultValue",
    "splitPolicy": "esriSPTDefaultValue"
   }
  },
  {
   "name": "LifeCycle",
   "type": "esriFieldTypeString",
   "alias": "Life Cycle",
   "length": 12,
   "domain": {
    "type": "codedValue",
    "name": "qppLifeCycle",
    "description": "Life Cycle",
    "codedValues": [
     {
      "name": "Active",
      "code": "Active"
     },
     {
      "name": "Inactive",
      "code": "Inactive"
     },
     {
      "name": "Proposed",
      "code": "Proposed"
     },
     {
      "name": "Retired",
      "code": "Retired"
     },
     {
      "name": "Waived",
      "code": "Waived"
     }
    ],
    "mergePolicy": "esriMPTDefaultValue",
    "splitPolicy": "esriSPTDefaultValue"
   }
  },
  {
   "name": "AssetName",
   "type": "esriFieldTypeString",
   "alias": "Asset Name",
   "length": 24,
   "domain": null
  },
  {
   "name": "ReplacementCost",
   "type": "esriFieldTypeString",
   "alias": "Replacement Cost",
   "length": 24,
   "domain": null
  },
  {
   "name": "Criticality",
   "type": "esriFieldTypeString",
   "alias": "Criticality",
   "length": 12,
   "domain": null
  },
  {
   "name": "Notes",
   "type": "esriFieldTypeString",
   "alias": "Notes",
   "length": 72,
   "domain": null
  },
  {
   "name": "CreatedBy",
   "type": "esriFieldTypeString",
   "alias": "Created By",
   "length": 30,
   "domain": null
  },
  {
   "name": "CreatedDate",
   "type": "esriFieldTypeDate",
   "alias": "Created Date",
   "length": 8,
   "domain": null
  },
  {
   "name": "EditedBy",
   "type": "esriFieldTypeString",
   "alias": "Edited By",
   "length": 30,
   "domain": null
  },
  {
   "name": "EditedDate",
   "type": "esriFieldTypeDate",
   "alias": "Edited Date",
   "length": 8,
   "domain": null
  },
  {
   "name": "SHAPE",
   "type": "esriFieldTypeGeometry",
   "alias": "SHAPE",
   "domain": null
  },
  {
   "name": "GlobalID",
   "type": "esriFieldTypeGlobalID",
   "alias": "GlobalID",
   "length": 38,
   "domain": null
  },
  {
   "name": "SHAPE_Length",
   "type": "esriFieldTypeDouble",
   "alias": "SHAPE_Length",
   "domain": null
  },
  {
   "name": "SHAPE_Area",
   "type": "esriFieldTypeDouble",
   "alias": "SHAPE_Area",
   "domain": null
  }
 ],
 "geometryField": {
  "name": "SHAPE",
  "type": "esriFieldTypeGeometry",
  "alias": "SHAPE"
 },
 "indexes": [
  {
   "name": "FDO_OBJECTID",
   "fields": "OBJECTID",
   "isAscending": true,
   "isUnique": true,
   "description": ""
  },
  {
   "name": "FDO_SHAPE",
   "fields": "SHAPE",
   "isAscending": true,
   "isUnique": false,
   "description": ""
  },
  {
   "name": "FDO_GlobalID",
   "fields": "GlobalID",
   "isAscending": true,
   "isUnique": false,
   "description": ""
  }
 ],
 "subtypes": [],
 "relationships": [],
 "canModifyLayer": true,
 "canScaleSymbols": false,
 "hasLabels": false,
 "capabilities": "Data,Map,Query",
 "maxRecordCount": 1000,
 "supportsStatistics": true,
 "supportsAdvancedQueries": true,
 "supportedQueryFormats": "JSON, AMF, geoJSON",
 "isDataVersioned": false,
 "ownershipBasedAccessControlForFeatures": {"allowOthersToQuery": true},
 "useStandardizedQueries": true,
 "advancedQueryCapabilities": {
  "useStandardizedQueries": true,
  "supportsStatistics": true,
  "supportsHavingClause": true,
  "supportsCountDistinct": true,
  "supportsOrderBy": true,
  "supportsDistinct": true,
  "supportsPagination": true,
  "supportsTrueCurve": true,
  "supportsReturningQueryExtent": true,
  "supportsQueryWithDistance": true,
  "supportsSqlExpression": true
 },
 "supportsDatumTransformation": true,
 "dateFieldsTimeReference": null,
 "supportsCoordinatesQuantization": true
};
