<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Munit extends MX_Controller {

    public function index(){
       $this->load->view('V_munit');
    }
    
    public function read(){
        $this->load->model('R_munit');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_munit->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('C_munit');
        $hasil = $this->C_munit->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('U_munit');
        $hasil = $this->U_munit->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('D_munit');
        $hasil = $this->D_munit->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function cbolist(){
        $this->load->model('R_munit');
        header('Content-type: application/json');
        print_r($this->R_munit->cbolist());
    }
            
}
