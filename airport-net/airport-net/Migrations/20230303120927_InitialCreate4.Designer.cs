﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using airport_net;

#nullable disable

namespace airport_net.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20230303120927_InitialCreate4")]
    partial class InitialCreate4
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("airport_net.Models.Airplane", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<bool>("IsBought")
                        .HasColumnType("boolean");

                    b.Property<bool>("IsBusy")
                        .HasColumnType("boolean");

                    b.Property<bool>("IsDecommissioned")
                        .HasColumnType("boolean");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("NumberPlaces")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Airplanes");
                });

            modelBuilder.Entity("airport_net.Models.Flight", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int?>("AirplaneId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("EndPoint")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("StartPoint")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AirplaneId")
                        .IsUnique();

                    b.ToTable("Flights");
                });

            modelBuilder.Entity("airport_net.Models.Ticket", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int?>("FlightId")
                        .HasColumnType("integer");

                    b.Property<int>("NumberOfFlight")
                        .HasColumnType("integer");

                    b.Property<int>("NumberOfPlace")
                        .HasColumnType("integer");

                    b.Property<int>("Price")
                        .HasColumnType("integer");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("UserId")
                        .HasColumnType("integer");

                    b.Property<bool>("isBusy")
                        .HasColumnType("boolean");

                    b.HasKey("Id");

                    b.HasIndex("FlightId");

                    b.HasIndex("UserId");

                    b.ToTable("Tickets");
                });

            modelBuilder.Entity("airport_net.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("LastName")
                        .HasColumnType("text");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<int?>("NumberOfPassport")
                        .HasColumnType("integer");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("SerialOfPassport")
                        .HasColumnType("integer");

                    b.Property<string>("SurName")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("airport_net.Models.Flight", b =>
                {
                    b.HasOne("airport_net.Models.Airplane", "Airplane")
                        .WithOne("Flight")
                        .HasForeignKey("airport_net.Models.Flight", "AirplaneId");

                    b.Navigation("Airplane");
                });

            modelBuilder.Entity("airport_net.Models.Ticket", b =>
                {
                    b.HasOne("airport_net.Models.Flight", "Flight")
                        .WithMany("Tickets")
                        .HasForeignKey("FlightId");

                    b.HasOne("airport_net.Models.User", null)
                        .WithMany("Ticket")
                        .HasForeignKey("UserId");

                    b.Navigation("Flight");
                });

            modelBuilder.Entity("airport_net.Models.Airplane", b =>
                {
                    b.Navigation("Flight");
                });

            modelBuilder.Entity("airport_net.Models.Flight", b =>
                {
                    b.Navigation("Tickets");
                });

            modelBuilder.Entity("airport_net.Models.User", b =>
                {
                    b.Navigation("Ticket");
                });
#pragma warning restore 612, 618
        }
    }
}
