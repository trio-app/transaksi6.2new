<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mbahan extends MX_Controller {

    public function index(){
       $this->load->view('V_mbahan');
    }
    
    public function read(){
        $this->load->model('R_mbahan');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_mbahan->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('C_mbahan');
        $hasil = $this->C_mbahan->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('U_mbahan');
        $hasil = $this->U_mbahan->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('D_mbahan');
        $hasil = $this->D_mbahan->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function cbolist(){
        $this->load->model('R_mbahan');
        header('Content-type: application/json');
        print_r($this->R_mbahan->cbolist());
    }
            
}
