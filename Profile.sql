create database Profile

create table PersonalInformation(
	PacientiID int identity(1,1), 
	EmriMbiemri varchar (255),
	Gjinia varchar (10),
	Adresa varchar(200),
	Qyteti varchar(50),
	NrTel int ,
	Emaili varchar (255)
);

insert into PersonalInformation values('Albiona Berisha','Femer','45,Milaim-Morina','Rahovec',383111111,'albionaberish@gmail.com');

create table BodyInformation(
	Datelindja date,
	Pesha float,
	GrupiGjakut varchar(10),
	Gjatesia float
);
insert into BodyInformation values('2001-03-15',75,'A+',1.70);

create table BloodPressure(
	BloodPressure varchar(20)
);
insert into BloodPressure values('120 , 80');

create table Allergies(
	Type varchar(50),
	Description varchar (255)
);
insert into Allergies values('Pollen','The immune system mistakenly identifies the harmless pollen as a dangerous intruder and begins to produce chemicals to fight against the pollen');

create table PatientHistory(
	Data date,
	Description varchar(255),
	Doctor varchar(50),
	Doctor_fullname varchar(255) foreign key references Doctor (FullName),   --dmth varet nga emertimi i tabeles doktori dhe atributit per full name
	NextVisit varchar(100)
);
insert into PatientHistory values('2021-05-27','Pacient has come with symptoms of pollen allergy, the symptoms were mild, accompanied by itchy eyes','Astrit Gashi','after 2 weeks');

create table Proceedures(
	ProceedureId int identity(1,1), 
	Emri varchar(255),
	Data date,
	Location_on_body varchar(50)
);

insert into Proceedures values('Electrography','2021-03-12','Legs');

create table LabTestResult(
	Emri varchar(255),
	Data date,
	Location_on_body varchar(50)
);
insert into LabTestResult values('RAST test','2021-04-25','Arm');