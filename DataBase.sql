PGDMP         8            	    {            BIA    14.5    14.5                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    37043    BIA    DATABASE     b   CREATE DATABASE "BIA" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "BIA";
                postgres    false            �            1259    37045    schedule    TABLE     �   CREATE TABLE public.schedule (
    id integer NOT NULL,
    user_id integer NOT NULL,
    date date NOT NULL,
    type_id integer NOT NULL
);
    DROP TABLE public.schedule;
       public         heap    postgres    false            �            1259    37044    schedule_id_seq    SEQUENCE     �   CREATE SEQUENCE public.schedule_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.schedule_id_seq;
       public          postgres    false    210                       0    0    schedule_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.schedule_id_seq OWNED BY public.schedule.id;
          public          postgres    false    209            �            1259    37064    type    TABLE     V   CREATE TABLE public.type (
    id integer NOT NULL,
    name character varying(50)
);
    DROP TABLE public.type;
       public         heap    postgres    false            �            1259    37063    type_id_seq    SEQUENCE     �   CREATE SEQUENCE public.type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.type_id_seq;
       public          postgres    false    214            	           0    0    type_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.type_id_seq OWNED BY public.type.id;
          public          postgres    false    213            �            1259    37052    user    TABLE     a   CREATE TABLE public."user" (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    37051    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    212            
           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    211            f           2604    37048    schedule id    DEFAULT     j   ALTER TABLE ONLY public.schedule ALTER COLUMN id SET DEFAULT nextval('public.schedule_id_seq'::regclass);
 :   ALTER TABLE public.schedule ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            h           2604    37067    type id    DEFAULT     b   ALTER TABLE ONLY public.type ALTER COLUMN id SET DEFAULT nextval('public.type_id_seq'::regclass);
 6   ALTER TABLE public.type ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            g           2604    37055    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            �          0    37045    schedule 
   TABLE DATA           >   COPY public.schedule (id, user_id, date, type_id) FROM stdin;
    public          postgres    false    210   �                 0    37064    type 
   TABLE DATA           (   COPY public.type (id, name) FROM stdin;
    public          postgres    false    214   �       �          0    37052    user 
   TABLE DATA           *   COPY public."user" (id, name) FROM stdin;
    public          postgres    false    212   o                  0    0    schedule_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.schedule_id_seq', 86, true);
          public          postgres    false    209                       0    0    type_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.type_id_seq', 5, true);
          public          postgres    false    213                       0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 48, true);
          public          postgres    false    211            j           2606    37050    schedule schedule_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.schedule
    ADD CONSTRAINT schedule_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.schedule DROP CONSTRAINT schedule_pkey;
       public            postgres    false    210            n           2606    37069    type type_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.type
    ADD CONSTRAINT type_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.type DROP CONSTRAINT type_pkey;
       public            postgres    false    214            l           2606    37057    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    212            p           2606    37070    schedule type_FK    FK CONSTRAINT     z   ALTER TABLE ONLY public.schedule
    ADD CONSTRAINT "type_FK" FOREIGN KEY (type_id) REFERENCES public.type(id) NOT VALID;
 <   ALTER TABLE ONLY public.schedule DROP CONSTRAINT "type_FK";
       public          postgres    false    214    3182    210            o           2606    37058    schedule user_FK    FK CONSTRAINT     |   ALTER TABLE ONLY public.schedule
    ADD CONSTRAINT "user_FK" FOREIGN KEY (user_id) REFERENCES public."user"(id) NOT VALID;
 <   ALTER TABLE ONLY public.schedule DROP CONSTRAINT "user_FK";
       public          postgres    false    212    210    3180            �   0   x��0�41�4202�54�50�4�0�X����P��L�=... A5	�         i   x�=˻�@��x�$^��Xȁ�����Π;��OG^�	�Y^��j�L�H��1��t�2R"'�w������w�%������.V{�����C�V� 4%DY      �   +   x�31��,K��21�464262�21�423,8��b���� �-�     