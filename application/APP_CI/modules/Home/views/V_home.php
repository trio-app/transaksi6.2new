<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!-- application title -->
        <title><?php echo app_title() . ' - ' . strip_tags(app_ver()); ?></title>
        <!-- included file -->
        <link  href="<?php echo extjs_url().'build/classic/theme-classic/resources/theme-classic-all.css'; ?>" rel="stylesheet" />
        <script src="<?php echo extjs_url().'build/ext-all.js'; ?>"></script>
        <script src="<?php echo extjs_url().'build/classic/theme-classic/theme-classic.js'; ?>"></script>
        <link href="<?php echo extjs_url().'fonts/font-awesome.min.css'; ?>" rel="stylesheet" />
        <script src="<?php echo base_url().'system/exportexcel.js'; ?>"></script>
        
    <script type="text/javascript">    
        // base variable        
        var base_url = '<?php echo base_url(); ?>';
        var extjs_url = '<?php echo extjs_url(); ?>';
 
    </script>   
    <script type="text/javascript">
         Ext.Loader.setConfig({ enabled: true });
    Ext.define('Varconfig', {
     singleton: true,
     UserLogin: 'admin',
     LoginDate: '2017-12-26 09:06:01',
    });
    Ext.application({
        name: 'Almindo',
        appFolder: 'application/APP',
        autoCreateViewport: true,
        requires : [
            'Varconfig'
        ], 
        controllers: ['Cviewport'],
        launch: function () {

        }
    });
        
    </script>
    </head>
    <body>

    </body>
</html>