FROM quay.io/naveeddogar/kingmd
RUN git clone https://github.com/TechnicalNaveed5/KING-TEST /root/TechnicalNaveed5
WORKDIR /root/TechnicalNaveed5/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
