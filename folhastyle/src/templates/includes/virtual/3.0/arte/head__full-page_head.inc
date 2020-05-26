<meta itemscope="" itemprop="mainEntityOfPage" itemtype="https://schema.org/WebPage" itemid="https://google.com/article"/>
<title>
	<!--#set var="PAGE_TITLE" value="$title - $section - Folha de S.Paulo" -->
	<!--#echo encoding="none" var="PAGE_TITLE" -->
</title>
<!--#include file="head__meta-canivete.inc"-->
<!--#if expr="$SERVER_PROTOCOL = 'HTTP/1.1' "-->
<script>if(window.location.host==="arte.folha.uol.com.br"&&window.location.protocol==="http:"){window.location.href=window.location.href.replace("http:","https:")}</script>
<!--#endif-->

<!--#include virtual="include-desliga-paywall.inc"-->

<!-- Metas de share -- INICIO -->
<!--#if expr="$description != '' "-->
<meta name="description" content="<!--#echo encoding='none' var='description'-->" />
<meta property="og:description" content="<!--#echo encoding='none' var='description'-->" />
<meta property="twitter:description" content="<!--#echo encoding='none' var='description'-->" />
<!--#else-->
<meta name="description" content="<!--#echo encoding='none' var='lead'-->" />
<meta property="og:description" content="<!--#echo encoding='none' var='lead'-->" />
<meta property="twitter:description" content="<!--#echo encoding='none' var='lead'-->" />
<!--#endif-->
<meta property="og:url" content="<!--#echo encoding='none' var='url'-->" />
<meta property="twitter:url" content="<!--#echo encoding='none' var='url'-->" />
<meta property="og:type" content="article" />
<meta name="twitter:site" value="@folha" />
<!--#if expr="$image != '' "-->
<meta property="og:image" content="<!--#echo var='image'-->" />
<meta name="twitter:image" content="<!--#echo var='image'-->" />
<meta property="og:image:width" content="1500">
<meta property="og:image:height" content="1000">
<div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
	<meta itemprop="url" content="<!--#echo var='image'-->">
	<meta itemprop="width" content="1500">
	<meta itemprop="height" content="1000">
</div>
<!--#else-->
<meta property="og:image" content="https://arte.folha.uol.com.br/library/others/share.png" />
<meta name="twitter:image" content="https://arte.folha.uol.com.br/library/others/share.png" />
<meta property="og:image:height" content="627">
<meta property="og:image:width" content="1200">
<meta property="og:image:type" content="image/png">
<div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
	<meta itemprop="url" content="https://arte.folha.uol.com.br/library/others/share.png">
	<meta itemprop="width" content="1500">
	<meta itemprop="height" content="1000">
</div>
<!--#endif-->
<!--#if expr="$share_title != '' "-->
<meta property="og:title" content="<!--#echo encoding='none' var='PAGE_TITLE' -->" />
<meta property="twitter:title" content="<!--#echo encoding='none' var='PAGE_TITLE' -->" />
<!--#else-->
<meta property="og:title" content="<!--#echo encoding='none' var='title' --> - Folha de S.Paulo" />
<meta property="twitter:title" content="<!--#echo encoding='none' var='title' --> - Folha de S.Paulo" />
<!--#endif-->
<!--#if expr="$credit != '' "-->
<meta name="author" content="<!--#echo encoding='none' var='credit'-->" />
<!--#else-->
<div itemprop="author" itemscope itemtype="https://schema.org/Organization">
	<meta itemprop="name" content="Folha de S.Paulo">
	<meta itemprop="url" content="https://www.folha.uol.com.br/">
</div>
<!--#endif-->
<meta name="twitter:creator" value="@folha" />
<meta name="twitter:card" value="summary_large_image" />
<meta property="og:site_name" content="Folha de S.Paulo" />
<meta property="fb:admins" content="100001113241596" />
<meta property="fb:app_id" content="1275501329172461" />
<meta property="fb:pages" content="100114543363891" />

<!--#if expr="${cover_date} = '' "-->
<time class="f-time"
	datetime="<!--#echo var='cover_date_year'-->-<!--#echo var='cover_date_month'-->-<!--#echo var='cover_date_day'-->T<!--#echo var='cover_time_hour'-->:<!--#echo var='cover_time_minute'-->:00"
	itemprop="datePublished">
</time>
<!--#if expr="${update_date} != '' && ${update_date} != 'undefined'  &&  ${update_date} != ' .undefined.undefined'"-->
<time class="f-time f-time_updated"
	datetime="<!--#echo var='update_date_year'-->-<!--#echo var='update_date_month'-->-<!--#echo var='update_date_day'-->T<!--#echo var='update_time_hour'-->:<!--#echo var='update_time_minute'-->:00"
	itemprop="dateModified">
</time>
<!--#endif-->
<!--#endif-->

<!-- Metas de share -- FIM -->
<style id="folhastyle">
	<!--#include file="article_full-page_style.css"-->
</style>
<!--#include file="head__load-fonts.inc"-->

<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="Folha de S.Paulo">

<meta name="msapplication-TileColor" content="#fff">
<meta name="theme-color" content="#262626">

<!--#if expr="$HTTP_X_NAMESPACE = 'folhaiosapp'"-->
	<meta name="folhaapp-webview" content="ios">
<!--#endif-->

<!--#if expr="$HTTP_X_NAMESPACE = 'folhaandroidapp'"-->
	<meta name="folhaapp-webview" content="android">
<!--#endif-->

<script type="application/ld+json">
{
	"@context":"http://schema.org",
	"@type":[
		"CreativeWork",
		"ReportageNewsArticle"
	],
	"url":"<!--#echo encoding='none' var='url'-->",
	"mainEntityOfPage":"<!--#echo encoding='none' var='url'-->",
	"headline":"<!--#echo encoding='none' var='title' -->",
	<!--#if expr="$description != '' "-->"description":"<!--#echo encoding='none' var='description'-->",<!--#else-->"description":"<!--#echo encoding='none' var='lead'-->",<!--#endif-->
	"datePublished":"<!--#echo var='cover_date_year'-->-<!--#echo var='cover_date_month'-->-<!--#echo var='cover_date_day'-->T<!--#echo var='cover_time_hour'-->:<!--#echo var='cover_time_minute'-->:00Z",
	"image":{
		"@type":"ImageObject",
		"url":"<!--#echo var='image'-->",
		"width":"1500",
		"height":"1000"
	},
	<!--#if expr="$credit != '' "-->"author": [{
    "@type": "Person",
    "name": "<!--#echo var='credit'-->",
    "description": "",
    "image": "",
    "sameAs": [],
    "workLocation": {
      "@type": "Place",
      "name": "São Paulo"
    }
  }],<!--#else-->"author": {
    "@id" : "https://www1.folha.uol.com.br#organization",
    "noBylinesPolicy": "https://temas.folha.uol.com.br/projeto-editorial-da-folha/projeto-editorial-folha-de-s-paulo/principios-editoriais.shtml"
  },<!--#endif-->
	"publisher":{
		"@type":"NewsMediaOrganization",
		"@id":"https://www1.folha.uol.com.br#organization",
		"name":"Folha de S.Paulo",
		"logo":{
			"@type":"ImageObject",
			"url":"https://f.i.uol.com.br/hunting/folha/1/amp/logo.png",
			"width":600,
			"height":60
		},
		"ethicsPolicy":"https://temas.folha.uol.com.br/projeto-editorial-da-folha/projeto-editorial-folha-de-s-paulo/principios-editoriais.shtml",
		"diversityPolicy":"https://temas.folha.uol.com.br/projeto-editorial-da-folha/projeto-editorial-folha-de-s-paulo/principios-editoriais.shtml",
		"correctionsPolicy":"https://temas.folha.uol.com.br/folha-projeto-editorial/manual-de-redacao-conduta/erramos.shtml",
		"ownershipFundingInfo":"https://www1.folha.uol.com.br/institucional/",
		"foundingDate":"1921-02-19",
		"masthead":"https://www1.folha.uol.com.br/institucional/expediente.shtml",
		"missionCoveragePrioritiesPolicy":"https://temas.folha.uol.com.br/projeto-editorial-da-folha/projeto-editorial-folha-de-s-paulo/sua-excelencia-o-consumidor-de-noticias.shtml",
		"verificationFactCheckingPolicy":"https://temas.folha.uol.com.br/folha-projeto-editorial/manual-de-redacao-conduta/conduta.shtml",
		"unnamedSourcesPolicy":"https://temas.folha.uol.com.br/projeto-editorial-da-folha/projeto-editorial-folha-de-s-paulo/principios-editoriais.shtml",
		"actionableFeedbackPolicy":"https://www1.folha.uol.com.br/falecomafolha/",
		"diversityStaffingReport":"https://temas.folha.uol.com.br/folha-projeto-editorial/manual-de-redacao-conduta/politica-de-diversidade.shtml",
		"contactPoint":[
			{
				"@type":"ContactPoint",
				"contactType":"Newsroom Contact",
				"url":"https://www1.folha.uol.com.br/falecomafolha/"
			},
			{
				"@type":"ContactPoint",
				"contactType":"Public Engagement",
				"url":"https://www1.folha.uol.com.br/falecomafolha/"
			}
		]
	},
	"publishingPrinciples":"https://temas.folha.uol.com.br/folha-projeto-editorial/manual-de-redacao-conduta/atuacao-profissional.shtml",
	"isAccessibleForFree":false,
	"hasPart":{
		"@type":"WebPageElement",
		"isAccessibleForFree":false,
		"cssSelector":".j-paywall"
	},
	"isPartOf":{
		"@type":[
			"CreativeWork",
			"Product"
		],
		"name":"Folha de S.Paulo",
		"productID":"folha.uol.com.br:news"
	}
}
</script>
