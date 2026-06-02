"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdotanteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdotanteService = class AdotanteService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAdotanteDto, usuarioId) {
        return this.prisma.adotante.create({
            data: {
                ...createAdotanteDto,
                dataNascimento: new Date(createAdotanteDto.dataNascimento),
                usuarioId,
            },
        });
    }
    async findAll() {
        return this.prisma.adotante.findMany({
            include: { telefones: true },
        });
    }
    async findOne(id) {
        const adotante = await this.prisma.adotante.findUnique({
            where: { id },
            include: { telefones: true },
        });
        if (!adotante) {
            throw new common_1.NotFoundException('Adotante não encontrado');
        }
        return adotante;
    }
    async update(id, updateAdotanteDto) {
        await this.findOne(id);
        const data = { ...updateAdotanteDto };
        if (updateAdotanteDto.dataNascimento) {
            data.dataNascimento = new Date(updateAdotanteDto.dataNascimento);
        }
        return this.prisma.adotante.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.adotante.delete({
            where: { id },
        });
    }
};
exports.AdotanteService = AdotanteService;
exports.AdotanteService = AdotanteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdotanteService);
//# sourceMappingURL=adotante.service.js.map