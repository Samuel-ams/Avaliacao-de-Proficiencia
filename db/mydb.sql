--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

-- Started on 2024-01-15 20:36:50

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16419)
-- Name: tb01; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb01 (
    tb01_id integer NOT NULL,
    col_texto text,
    col_dt timestamp without time zone
);


ALTER TABLE public.tb01 OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16418)
-- Name: tb01_tb01_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tb01_tb01_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tb01_tb01_id_seq OWNER TO postgres;

--
-- TOC entry 4839 (class 0 OID 0)
-- Dependencies: 215
-- Name: tb01_tb01_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tb01_tb01_id_seq OWNED BY public.tb01.tb01_id;


--
-- TOC entry 4688 (class 2604 OID 16422)
-- Name: tb01 tb01_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb01 ALTER COLUMN tb01_id SET DEFAULT nextval('public.tb01_tb01_id_seq'::regclass);


--
-- TOC entry 4690 (class 2606 OID 16426)
-- Name: tb01 tb01_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb01
    ADD CONSTRAINT tb01_pkey PRIMARY KEY (tb01_id);


-- Completed on 2024-01-15 20:36:50

--
-- PostgreSQL database dump complete
--

