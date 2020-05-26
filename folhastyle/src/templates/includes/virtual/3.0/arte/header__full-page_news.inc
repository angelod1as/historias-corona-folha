<div class="f-container">
	<!--#if expr="${show_header_news} = 'true' "-->
	<header class="f-article__header">
		<!--#if expr="${kicker} != '' "-->
		<!--#if expr="${kicker_link} != '' "-->
		<p class="f-kicker">
			<a href="<!--#echo var='kicker_link'-->" class="f-kicker">
				<!--#echo encoding="none" var='kicker'-->
			</a>
		</p>
		<!--#else-->
		<p class="f-kicker">
			<!--#echo encoding="none" var='kicker'-->
		</p>
		<!--#endif-->
		<!--#endif-->
		<h1 itemprop="headline" class="f-headline">
			<!--#echo encoding="none" var="title"-->
		</h1>
		<p itemprop="alternativeHeadline" class="f-lead">
			<!--#echo encoding="none" var="lead"-->
		</p>

		<!--#if expr="${cover_date} != '' "-->
		<div class="f-datetime">
			<time class="f-time" datetime="<!--#echo var='cover_date_year'-->-<!--#echo var='cover_date_month'-->-<!--#echo var='cover_date_day'-->T<!--#echo var='cover_time_hour'-->:<!--#echo var='cover_time_minute'-->:00"
				itemprop="datePublished">
				<!--#set var="PAGE_DATE" value="$cover_date - $cover_time" -->
				<!--#echo encoding="none" var="PAGE_DATE" -->
			</time>
			<!--#if expr="${update_date} != '' && ${update_date} != 'undefined'  &&  ${update_date} != ' .undefined.undefined'"-->
			<time class="f-time f-time_updated" datetime="<!--#echo var='update_date_year'-->-<!--#echo var='update_date_month'-->-<!--#echo var='update_date_day'-->T<!--#echo var='update_time_hour'-->:<!--#echo var='update_time_minute'-->:00"
				itemprop="dateModified">
				<!--#set var="PAGE_UPDATE" value="Atualizado: $update_date - $update_time" -->
				<span><!--#echo encoding="none" var="PAGE_UPDATE" --></span>
			</time>
			<!--#endif-->
		</div>
		<!--#endif-->

		<div class="f-toolbar">
			<!--#include file="toolbar.inc"-->
		</div>

		<!--#if expr="${credit} != '' || ${origin} != ''"-->
		<div itemprop="author creator" itemscope="itemscope" itemtype="http://schema.org/Person" class="f-byline">
			<p itemprop="name" class="f-byline_names" rel="author">
				<!--#echo encoding="none" var="credit"-->
			</p>
		</div>
		<!--#endif-->
	</header>
	<!--#endif-->
</div>
<!-- htmlmin:ignore --><div class="j-paywall" data-paywall-box><!-- htmlmin:ignore -->
