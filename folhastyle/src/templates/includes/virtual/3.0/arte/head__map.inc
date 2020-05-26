<meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"><!--#include file="head__embed_head.inc"--><style>
	.g-map {
			margin: 0 auto;
			-webkit-font-smoothing: antialiased;
			-moz-os-font-smoothing:grayscale;
			width: 100%;
			max-width: 670px;
	}
	.chart__title {
font-family: FolhaGrafico, 'Folha Grafico', sans-serif;
font-size: 23px;
font-weight: 600;
line-height: 1.3;
}
.chart__lead {
font-family: FolhaGrafico, 'Folha Grafico', sans-serif;
font-size: 18px;
line-height: 1.3;
color: #757575;
}
.mapboxgl-marker {
	position: absolute;
	top: 0;
	left: 0;
	will-change: transform;
}
.marker-label {
white-space: pre;
position: absolute;
left: 0;
top: 0;
line-height: 1.2;
font-family: FolhaGrafico, 'Folha Grafico', sans-serif;
-webkit-user-select: none;
	 -moz-user-select: none;
		-ms-user-select: none;
				user-select: none;
font-size: 14px;
font-weight: 600;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
.marker-label.halo {
text-shadow: #fff 2px 0px 0px, #fff 1.75517px 0.958851px 0px, #fff 1.0806px 1.68294px 0px, #fff 0.141474px 1.99499px 0px, #fff -0.832294px 1.81859px 0px, #fff -1.60229px 1.19694px 0px, #fff -1.97998px 0.28224px 0px, #fff -1.87291px -0.701566px 0px, #fff -1.30729px -1.5136px 0px, #fff -0.421592px -1.95506px 0px, #fff 0.567324px -1.91785px 0px, #fff 1.41734px -1.41108px 0px, #fff 1.92034px -0.558831px 0px;
}
.svg-marker {
position: absolute;
overflow: visible;
-webkit-user-select: none;
	 -moz-user-select: none;
		-ms-user-select: none;
				user-select: none;
}
.maps-container {
	margin: 1em 0 0 0;
	position: relative;
}
.map-container {
	position: relative;
	overflow: hidden;
}
p.maps__attribution {
	font-size: 12px;
	margin: 0 0 1em 0;
	color: #757575;
	text-align: right
}
.g-mapImage {
}
.markers-container {
	position: absolute;
	top: 0;
	left: 0;
}
.g-mapFooter {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
}
.mapboxgl-ctrl-scale {
padding: 0 5px;
background-color: rgba(255, 255, 255, 0.75);
	font-size: 12px;
	border-width: medium 2px 2px;
	border-style: none solid solid;
	border-color: #333;
	padding: 0 5px;
	color: #333;
	box-sizing: border-box;
}
.container__scaleCompass {
    position: absolute;
    bottom: 0;
    background: #fff;
    padding: 0.5em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.compass__wrapper {
    margin-right: 0.5em;
}
.scale__wrapper {
    text-align: center;
}
.scale__ruler {
    border: 2px solid #000;
    border-top: none;
    height: 10px;
}
.container__miniMap {
position: absolute;
pointer-events: none;
overflow: hidden;
z-index: 1;
bottom: 0;
right: 0;
}
.chart__source {
font-size: 12px;
}
.annotates {
margin-top: 2em;
}
.annotates svg,
.annotates svg * {
	-webkit-transform-origin: 0px 0px 0px;
	transform-origin: 0px 0px 0px;
	padding: 0;
	margin: 0;
}
.annotates svg > * {
	vertical-align: middle;
	display: inline;
}
.annotates__list,
.annotates__columns {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
		flex-wrap: wrap;
}
.annotates__list .annotate {
width: 100%;
}
.annotate {
list-style: none;
padding: 0;
margin: 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
font-size: 16px;
}
.annotate__title {
font-size: 18px;
font-weight: 500;
}
@media only screen and (min-width: 490px) {
.annotates__list .annotate {
	width: auto;
	padding-right: 2%;
}
}
.annotates__columns .annotate {
width: 100%;
}
@media only screen and (min-width: 490px) {
.annotates__columns .annotate {
	width: 47%;
	margin-right: 3%;
}
}
</style></head><body class="f-graphic"><div class="folha-loader"><div class="folha-loader__container"><img src="/library/folhastyle/3.0/images/loading.gif" alt="Imagem de carregamento"></div></div>
