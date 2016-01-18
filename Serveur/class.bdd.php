<?php
/*
	Mise en page g�n�rale de EdicomCMS
	Cod� par Mourad Kejji le xx/xx/xxxx
			-	mkejji@gmail.com
	
	T�ches du script :
			- Cr�ation de la classe BDD (Base de donn�es) qui permettra de 
			se connecter � une base de donn�es, de g�n�rer des requ�tes, de les
			executer et d'en extraire les r�sultats de la fa�on la plus param�trable
			possible.
*/

class Bdd
{
	private $config = array(),
		$error,
		$requete,
		$nbreq = 0,
		$histo_requetes = array();
		
	public $result, $link;
		
	function __construct($host=DB_HOST, $user=DB_USER, $pass=DB_PASS, $name=DB_NAME)
	{
		if ($host)
			$this->config['host'] = $host;
		if ($user)
			$this->config['user'] = $user;
		if ($name)
			$this->config['name'] = $name;
		$this->config['pass'] = $pass;
		$this->link = $this->connect();
	}
	
	function connect()
	{
		$id = mysql_connect($this->config['host'], $this->config['user'], $this->config['pass']);
		if (!$id)
		{
			$this->error = "Connexion impossible";
			return false;
		}
		$sel = mysql_select_db($this->config['name']);
		if (!$sel)
		{
			$this->error = "Base de donn�es introuvable";
			return false;
		}
		mysql_set_charset('utf8',$id);
		return $id;
	}
	
	
	
	function query($sql)
	{
		$this->requete[] = $sql;
		$query = mysql_query($sql, $this->link);
		if (!$query)
		{
			$this->error = mysql_error();
			return false;
		}
		if (preg_match("`^select`i", $sql))
		{
			$recordset = array();
			while ($data = mysql_fetch_assoc($query))
			{
				$recordline = array();
				foreach($data as $key => $value)
				{
					$recordline[$key] = $value;
				}
				$recordset[] = $recordline;
			}
			$this->result = $recordset;
			return $recordset;
		}
		$this->nbreq++;
	}
	
}
?>