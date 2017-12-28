<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tspkerja extends MX_Controller {

    public function index(){
       $this->load->view('V_tspkerja');
    }
    
    public function read(){
        $this->load->model('R_tspkerja');
        $start = $this->input->post('start');
        $limit = $this->input->post('limit');
        $filter = $this->input->post('filter');
        header('Content-type: application/json');
        print_r( $this->R_tspkerja->load_default($start,$limit,$filter));
        
    }

    public function create(){   
        $jsonData =  file_get_contents("php://input");
        $this->load->model('C_tspkerja');
        $hasil = $this->C_tspkerja->insertDT(json_decode($jsonData,true));
        print($hasil); 
    }
    public function update(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('U_tspkerja');
        $hasil = $this->U_tspkerja->updateDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function delete(){
        $jsonData =  file_get_contents("php://input");        
        $this->load->model('D_tspkerja');
        $hasil = $this->D_tspkerja->deleteDT(json_decode($jsonData,true));
        print($hasil);
    }
    public function cbolist(){
        $this->load->model('R_tspkerja');
        header('Content-type: application/json');
        print_r($this->R_tspkerja->cbolist());
    }
            
}
