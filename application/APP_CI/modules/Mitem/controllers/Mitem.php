<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mitem extends MX_Controller {

    public function index(){
       $this->load->view('V_mitem');
    }
    
    public function read(){
        $this->load->model('R_mitem');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_mitem->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('C_mitem');
        $hasil = $this->C_mitem->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('U_mitem');
        $hasil = $this->U_mitem->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('D_mitem');
        $hasil = $this->D_mitem->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function cbolist(){
        $this->load->model('R_mitem');
        header('Content-type: application/json');
        print_r($this->R_mitem->cbolist());
    }
            
}
