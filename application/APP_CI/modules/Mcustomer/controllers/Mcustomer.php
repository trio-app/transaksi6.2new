<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mcustomer extends MX_Controller {

    public function index(){
       $this->load->view('V_mcustomer');
    }
    
    public function read(){
        $this->load->model('R_mcustomer');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_mcustomer->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('C_mcustomer');
        $hasil = $this->C_mcustomer->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('U_mcustomer');
        $hasil = $this->U_mcustomer->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('D_mcustomer');
        $hasil = $this->D_mcustomer->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function cbolist(){
        $this->load->model('R_mcustomer');
        header('Content-type: application/json');
        print_r($this->R_mcustomer->cbolist());
    }
            
}
