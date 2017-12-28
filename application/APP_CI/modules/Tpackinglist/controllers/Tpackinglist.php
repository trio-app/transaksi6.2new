<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tpackinglist extends MX_Controller {

    public function index(){
       $this->load->view('V_tpackinglist');
    }
    
    public function read(){
        $this->load->model('R_tpackinglist');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_tpackinglist->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('C_tpackinglist');
        $hasil = $this->C_tpackinglist->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('U_tpackinglist');
        $hasil = $this->U_tpackinglist->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('D_tpackinglist');
        $hasil = $this->D_tpackinglist->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function cbolist(){
        $this->load->model('R_tpackinglist');
        header('Content-type: application/json');
        print_r($this->R_tpackinglist->cbolist());
    }
            
}
