<?php get_header(); ?>
<div class="container-wrapper textile">
	<main id="main-full-width">
	<header>
		<?php $title = get_theme_mod( 'home_page_title' ); ?>
		<h1><?php if ( $title != '' ) { echo $title; } else { echo bloginfo('name'); }?></h1>
		<?php echo get_theme_mod( 'home_page_html' );?>
	</header>
	<?php get_template_part('loop'); ?>
	<?php get_template_part('pagination'); ?>
	</main><!--main-full-width-->
</div><!-- container-wrapper -->
<?php get_footer(); ?>