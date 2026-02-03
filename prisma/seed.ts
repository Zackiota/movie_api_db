import { PrismaClient } from '../src/generated/client/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient(<any>{});

async function main() {
  console.log('🌱 Seeding started...');

  // 1. Create a hashed password for your test user
  const hashedPassword = await bcrypt.hash('123456', 10);

  // 2. Seed 'nguoi_dung' (User) table
  const user = await prisma.nguoiDung.upsert({
    where: { email: 'admin@gmail.com' }, // Prevents duplicates if run seed twice
    update: {},
    create: {
      email: 'admin@gmail.com',
      hoTen: 'Admin User',
      matKhau: hashedPassword,
      soDt: '0123456789',
      loaiNguoiDung: 'ADMIN',
    },
  });

  console.log({ user });

  //  Seed 'phim' (Movie) table
  const movie = await prisma.phim.create({
    data: {
      tenPhim: 'Interstellar',
      trailer: 'https://...',
      hinhAnh: 'https://...',
      ngayKhoiChieu: new Date(),
      danhGia: 10,
      hot: true,
      dangChieu: true,
      sapChieu: false,
     },
   });

  console.log('✅ Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });