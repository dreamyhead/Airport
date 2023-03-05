#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["airport-net/airport-net.csproj", "airport-net/"]
RUN dotnet restore "airport-net/airport-net.csproj"
COPY . .
WORKDIR "/src/airport-net"
RUN dotnet build "airport-net.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "airport-net.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "airport-net.dll"]