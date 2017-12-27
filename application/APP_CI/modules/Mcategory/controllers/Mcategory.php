<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mcategory extends MX_Controller {

    public function index(){
       $this->load->view('V_mcategory');
    }
    
    public function read(){
        $this->load->model('R_mcategory');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_mcategory->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('C_mcategory');
        $hasil = $this->C_mcategory->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('U_mcategory');
        $hasil = $this->U_mcategory->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('D_mcategory');
        $hasil = $this->D_mcategory->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function cbolist(){
        $this->load->model('R_mcategory');
        header('Content-type: application/json');
        print_r($this->R_mcategory->cbolist());
    }
            
}
