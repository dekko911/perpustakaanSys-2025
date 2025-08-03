<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('circulations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('id_skl')->unique();
            $table->foreignUuid('buku_id')->references('id')->on('books')->onDelete('cascade')->onUpdate('cascade');
            $table->string('peminjam');
            $table->string('tanggal_pinjam');
            $table->string('jatuh_tempo');
            $table->string('denda');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('circulations');
    }
};
